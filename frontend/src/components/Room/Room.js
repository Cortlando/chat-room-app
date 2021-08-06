import React, {useState, useEffect} from 'react'

import io from 'socket.io-client'

import QueryString from 'query-string'
import RoomPageHeader from './RoomPageHeader/RoomPageHeader'
import ChatBox from './ChatBox/ChatBox'
let socket



const Room = ({location}) => {

    const [roomName, setRoomName] = useState('')

    useEffect(() => {
       
        let name = QueryString.parse(location.search)

        setRoomName(name.roomName)
  
    }, [roomName])


  //  console.log(location)
    return(
        <div className="RoomPage">
            <div className="RoomPageHeader">
                <RoomPageHeader roomName = {roomName}/>
            </div>
            <div className="ChatBox">
                    <ChatBox/>
            </div>
           <div className="inputBar">
                asda
           </div>
        </div>
    )
}

export default Room