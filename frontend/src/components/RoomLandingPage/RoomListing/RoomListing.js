import React, { useEffect } from 'react'

import { Button } from '@material-ui/core' 

import './RoomListing.css'

import io from 'socket.io-client'

const RoomListing = ({roomName}) => {


    return (
        <Button className="Room">

        <p>{roomName}</p>

        
    </Button>
    )
}

export default RoomListing