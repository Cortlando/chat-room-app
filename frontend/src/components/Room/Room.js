import React, { useState, useEffect, useContext } from 'react'

import QueryString from 'query-string'
import RoomPageHeader from './RoomPageHeader/RoomPageHeader'
import ChatBox from './ChatBox/ChatBox'
import Input from './Input/Input'
import SocketContext from '../../SocketContext'
import { useAuth0 } from "@auth0/auth0-react";

import './Room.css'


let refreshcount = 0
let socketUseEffectCount = 0
let messagesUseEffectCount = 0
//TODO: Look into whether you can change timeout times

const Room = React.memo(({ location }) => {

    const [roomName, setRoomName] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const { user } = useAuth0()

    const socket = useContext(SocketContext)

    useEffect(() => {

        let { roomName } = QueryString.parse(location.search)

        setRoomName(roomName)

        socket.emit('create', `${roomName}`)

        socketUseEffectCount++
        //console.log(`%c1st useEffect has run ${socketUseEffectCount}`, 'color:green')
    }, [])

    useEffect(() => {
        socket.on('recieveMessage', function(msg) {

            setMessages(messages => [...messages, msg.message + `+-+${msg.nickname}`])

            messagesUseEffectCount++
            //console.log(`%c2nd useEffect has run ${messagesUseEffectCount}`, 'color:red')
           
        })
    },[ socket])

    // refreshcount++
    // console.log(`room has refreshed ${refreshcount} times`)

    console.log(messages)
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
            <div className="MessageInput">
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

})

export default Room