import React, { useEffect, useContext, } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core'

import './RoomListing.css'

import io, { Socket } from 'socket.io-client'

import SocketContext from '../../../SocketContext'

const RoomListing = ({ roomName }) => {

    const socket = useContext(SocketContext)


    //Send roomName to backend and make use join room they clicked on


    function handleClick(roomName) {
        socket.emit('join room', roomName, () => {

        })
    }

    return (
        <Link onClick={() => handleClick(roomName)} to={`/room?roomName=${roomName}`}>
            <Button className="Room" >

                <p id="roomName">{roomName}</p>

            </Button>
        </Link>

    )

}


export default RoomListing