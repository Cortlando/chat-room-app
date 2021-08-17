import React from 'react';

import './Message.css';

//TODO: Add styling to the messages, add names to messsages and make the appear on the right if from sender, or left if from someone else
//TODO: Figure out how I'm going to get the uses name to show up next to the picture
const Message = ({message}) => {
    console.log(message)
    return(
        <div className = "Message">
            {message}
        </div>
    )
}

export default Message