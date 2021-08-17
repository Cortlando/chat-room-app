import React, { useContext } from 'react'

import './Input.css'


import SocketContext from '../../../SocketContext'

//TODO: Stylize the input and button, move it to the bottom of the page
//TODO: Optimize the input, make it so setMessage isn't called every onChange
const Input = ({ message, setMessage, messages, setMessages, user, roomName }) => {

    const socket = useContext(SocketContext)

    

    function sendMessage(message) {
        console.log(message)

       if(message && user){
           socket.emit('sendMessage', {message, user, roomName}, () => setMessage(''))
           setMessages(oldMessages => [...oldMessages, message])
       }
       else if(message && user === undefined){
        socket.emit('sendMessage', {message, roomName}, () => setMessage(''))
        setMessages(oldMessages => [...oldMessages, message])
       }
    }

    return(
        <div className="inputBar">
            <input type="text" 
            name="name" 
            value={message} 
            onChange={e => setMessage(e.target.value)} 
            onKeyPress={ e=> e.key === 'Enter' ? sendMessage(message) : null}/>
            
            <button onClick={() => sendMessage(message)}> Send</button>
        </div>
    )
}

export default Input