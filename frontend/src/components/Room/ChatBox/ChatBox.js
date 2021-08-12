import React from 'react'

import Message from '../Message/Message'


//TODO: Make the box fill up most of the screen
const ChatBox = ({messages, user}) => {

    console.log(user)

    if(messages && user){
        return(
            <div className="chatBox">
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
    // return(
    //     <div className="chatBox">
    //         This is the chat box
            
    //     </div>
    // )
}

export default ChatBox