import React from 'react';

import './Message.css';

//TODO: Add styling to the messages, add names to messsages and make the appear on the right if from sender, or left if from someone else
const Message = ({message}) => {
    console.log(message)
    return(
        <div>
            {message}
        </div>
    )
}

export default Message