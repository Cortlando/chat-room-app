import React from 'react';

import './Message.css';
import { useAuth0 } from "@auth0/auth0-react";
//TODO: Add styling to the messages, add names to messsages and make the appear on the right if from sender, or left if from someone else
//TODO: Figure out how I'm going to get the uses name to show up next to the picture
const Message = React.memo(({ message }) => {
    //console.log(message)

    // const { user } = useAuth0()
    // let currentUserNickname = "Guest"
    let Messagename = " "
    let isSentByCurrentUser = false



    //1.Extract user name from message
    //2.Compare it to the current users name
    //If its different, show message on left. The same, show message on right

    //console.log(me)

    if (message.includes("+-+")) {
        Messagename = message.split("+-+")
        message = Messagename[0]
    }
    else {
        isSentByCurrentUser = true
    }

  //  console.log(Messagename[1])
  //  console.log(isSentByCurrentUser)
    // console.log(isSentByCurrentUser)




    return (
        isSentByCurrentUser ? (
            <div className="messageContainer">
                <div className="messageBox">
                    <p className="messageTextHomeBackground">
                        <span id="messageTextHome">
                            {message}
                        </span>
                    </p>
                </div>
            </div>)
            : (
                <div className="messageContainer">
                    <div className="messageNameBox">
                        <p className="messageNameBackground">
                            <span id="messageName">{Messagename[1]}</span>
                        </p>
                    </div>
                    <div className="messageBox">
                        <p className="messageTextForeignBackground">
                            <span id="messageTextForeign">
                                {message}
                            </span>
                        </p>
                    </div>
                </div>
            )
    )
})

export default Message