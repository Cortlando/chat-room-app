import React from "react"
import RoomListing from "../RoomListing/RoomListing"
import './RoomListings.css'


const RoomListings = ({cleanedRoomList}) => {


    console.log(cleanedRoomList)
    if(cleanedRoomList !== []){
        return(
            <div>
                {cleanedRoomList.map((roomName, i) => <div key={i}><RoomListing roomName={roomName}/></div>)}
            </div>
        )
    }
    else{
        return(
            <div>
                Hel
            </div>
        )
    }
}

export default RoomListings