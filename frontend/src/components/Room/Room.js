import React, {useState, useEffect} from 'react'

import io from 'socket.io-client'

import QueryString from 'query-string'
import RoomPageHeader from './RoomPageHeader/RoomPageHeader'
import ChatBox from './ChatBox/ChatBox'
let socket



const Room = ({location}) => {

    const [roomName, setRoomName] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const ENDPOINT = 'localhost:4000'

    useEffect(() => {
       
        let {roomName} = QueryString.parse(location.search)

        setRoomName(roomName)

        socket = io(ENDPOINT)

        socket.emit('join', {roomName}, (error) =>{
            if(error){
                alert(error)
            }
        })

        return () => {
            socket.disconnect()

            socket.off()
        }
  
    }, [location.search])

    
    //Gets all
    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message])
        })
    }, [messages])


    const sendMessage = (e) => {
        e.preventDefault()

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

  //  console.log(location)
    return(
        <div className="RoomPage">
            <div className="RoomPageHeader">
                <RoomPageHeader roomName = {roomName}/>
            </div>
            <div className="ChatBox">
                    <ChatBox messages={messages} />
            </div>
           <div className="inputBar">
                asda
           </div>
        </div>
    )
}

export default Room