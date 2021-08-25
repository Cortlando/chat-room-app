import React, { useContext, useCallback } from 'react'

import './Input.css'


import SocketContext from '../../../SocketContext'

//TODO: Stylize the input and button, move it to the bottom of the page
//TODO: Optimize the input, make it so setMessage isn't called every onChange
//TODO: Set 2 second interval between message sends
//TODO: experiment with wrapping sendMessage in useCallback

let refreshcount = 0
const Input = React.memo(({ message, setMessage, setMessages, user, roomName }) => {

    const socket = useContext(SocketContext)

    
    const sendMessage = useCallback((message) => {
        if (message && user) {
            socket.emit('sendMessage', { message, user, roomName }, () => setMessage(''))
            setMessages(oldMessages => [...oldMessages, message])
        }
        else if (message && user === undefined) {
            socket.emit('sendMessage', { message, roomName }, () => setMessage(''))
            setMessages(oldMessages => [...oldMessages, message])
        }

        //Clears input after message is sent
        setMessage('')
        refreshcount++
       // console.log(`sendMessage has been ran ${refreshcount} times`)

        
    }, [roomName, setMessage, setMessages, socket, user])


    // refreshcount++
    // console.log(`Input has refreshed ${refreshcount} times`)
    return (
        <div className="inputBar">
            <input type="text"
                name="name"
                value={message}
                placeholder="Type a message..."
                onChange={e => setMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? sendMessage(message) : null} />

            <button onClick={() => sendMessage(message)}> Send</button>
        </div>
    )
})

export default Input