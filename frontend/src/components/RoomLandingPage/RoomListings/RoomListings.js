import React from "react"
import RoomListing from "../RoomListing/RoomListing"
import './RoomListings.css'


const RoomListings = ({cleanedRoomList}) => {


   // console.log(cleanedRoomList)
    if(cleanedRoomList !== []){
        return(
            <div className="roomListingsList">
                {cleanedRoomList.map((roomName, i) => <div className="RoomListing" key={i}><RoomListing roomName={roomName}/></div>)}
            </div>
        )
    }
    else{
        return(
            <div>
                
            </div>
        )
    }
}

export default RoomListings