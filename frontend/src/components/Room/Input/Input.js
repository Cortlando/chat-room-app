import React, { useContext } from 'react'

import './Input.css'


import SocketContext from '../../../SocketContext'

//TODO: Stylize the input and button, move it to the bottom of the page
const Input = ({ message, setMessage, messages, setMessages }) => {

    const socket = useContext(SocketContext)

    function sendMessage(message) {
       if(message){
           socket.emit('sendMessage', message, () => setMessage(''))
           setMessages(oldMessages => [...oldMessages, message])
       }
    }

    return(
        <div>
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