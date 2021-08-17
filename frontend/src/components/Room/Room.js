import React, { useState, useEffect, useContext } from 'react'

import QueryString from 'query-string'
import RoomPageHeader from './RoomPageHeader/RoomPageHeader'
import ChatBox from './ChatBox/ChatBox'
import Input from './Input/Input'
import SocketContext from '../../SocketContext'
import { useAuth0 } from "@auth0/auth0-react";


//TODO: Make it so users can join other peoples rooms
//TODO: Might have to make it so it checks if the room name is in already when create is emitted. If it is just join without creating it
//TODO: Look into whether you can change timeout times

const Room = ({ location }) => {

    const [roomName, setRoomName] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const { user } = useAuth0()

    const socket = useContext(SocketContext)

    useEffect(() => {

        let { roomName } = QueryString.parse(location.search)

        setRoomName(roomName)

        socket.emit('create', `${roomName}`)


    }, [location.search, socket])

    useEffect(() => {
        socket.on('recieveMessage', function(msg) {
            console.log(msg)
            setMessages( [...messages, msg.message])
            console.log("IT WORKS")
        })
    },[socket, messages])

    if(messages){
        console.log(messages)
    }
    return (
        <div className="RoomPage">
            <div className="RoomPageHeader">
                <RoomPageHeader 
                roomName={roomName} />
            </div>
            <div className="ChatBox">
                <ChatBox 
                messages = {messages} 
                user = {user}/>
            </div>
            <div>
                <Input 
                message={message} 
                setMessage={setMessage} 
                socket={socket} 
                messages={messages} 
                setMessages={setMessages} 
                user={user}
                roomName ={roomName} />
            </div>
        </div>
    )

}

export default Room