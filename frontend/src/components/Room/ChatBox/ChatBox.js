import React, { useCallback, useEffect } from 'react'

import Message from '../Message/Message'

import './ChatBox.css'

//TODO: Make the box fill up most of the screen

let refreshcount = 0;
let messagesUseEffectCount = 0;
const ChatBox = React.memo(({ messages, user}) => {

    //console.log(user)
    // refreshcount++
    // console.log(`Chat box has refreshed ${refreshcount} times`)


    if(messages && user){
        return(
            <div className="message">
            {messages.map((message, i) => <div key={i}><Message message={message} user = {user}/></div>)}
            </div>
        )
    }
    else if(messages && user === undefined){
        return(
            <div className="chatBox">
            {messages.map((message, i) => <div key={i}><Message message={message} /></div>)}
            </div>
        )
    }
    else{
        return(
            <div>
                    adwad
            </div>
        )

    }

 
},)

export default ChatBox