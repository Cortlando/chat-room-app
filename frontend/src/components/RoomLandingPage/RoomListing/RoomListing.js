import React, { useEffect } from 'react'

import { Button } from '@material-ui/core' 

import './RoomListing.css'

import io from 'socket.io-client'

const RoomListing = ({socket}) => {

    useEffect(() =>{
        socket.on("join room", () => {
            console.log("Joined Room")
        })
    })

    return (
        <Button className="Room">

        <p>Room Name</p>

        <p>Number of People in Room</p>
    </Button>
    )
}

export default RoomListing