import React from 'react';

import './Message.css';

//TODO: Add styling to the messages, add names to messsages and make the appear on the right if from sender, or left if from someone else
//TODO: Figure out how I'm going to get the uses name to show up next to the picture
const Message = React.memo(({ message }) => {
    //console.log(message)


    let Messagename = " "
    let isSentByCurrentUser = false



    //1.Extract user name from message
    //2.Compare it to the current users name
    //If its different, show message on left. The same, show message on right

    if (message.includes("+-+")) {
        Messagename = message.split("+-+")
        message = Messagename[0]
    }
    else {
        isSentByCurrentUser = true
    }





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