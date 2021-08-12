import React, { useContext, useEffect, useState } from 'react'

import io from 'socket.io-client'

import './RoomLandingPage.css'

import RoomLandingPageHeader from './RoomLandingPageHeader/RoomLandingPageHeader'
import RoomListing from './RoomListing/RoomListing'
import SocketContext from '../../SocketContext'

//let socket

/* 
TODO: 
Remove the white space around the RoomLandingPage Div( the div that surrounds everything)
Make the black border for the above div go all the way down to bottom of page ( make div take up whole page)
Start adding socket.io functionality


*/


//TODO: ReAdd the OnlineStatusSideDrawer and figure out how to make it not cover the header

const RoomLandingPage = () => {

    const [users, setUsers] = useState('')
    const [rooms, setRooms] = useState('')
    const [isLoading, setLoading] = useState(true)
    

    const socket = useContext(SocketContext)

    useEffect(() => {

        socket.on("connect", () => {
            console.log(socket.connected)
            
        })

        setLoading(false)
        
        console.log(socket)
    }, [socket])


    if (isLoading) {
        return (
            <div>
                Loading....
            </div>

        )

    }
    else{
        return (
            <div className="RoomLandingPage">
                <div className="RoomLandingPageHeader">
                    <RoomLandingPageHeader rooms={rooms} setRooms={setRooms} />
                </div>
                <div className="RoomListings">
                    <div className="RoomListing">
                         <RoomListing socket={socket} />
    
                    </div>
                </div>
    

    
    
            </div>
        )
    }


}

export default RoomLandingPage
