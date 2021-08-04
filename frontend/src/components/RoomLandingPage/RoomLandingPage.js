import React, { useEffect, useState } from 'react'

import io from 'socket.io-client'

import { AppBar, Button, Drawer } from '@material-ui/core'

import './RoomLandingPage.css'

import RoomLandingPageHeader from './RoomLandingPageHeader/RoomLandingPageHeader'
import Room from './Room/Room'
import OnlineStatusSideDrawer from './OnlineStatusSideDrawer/OnlineStatusSideDrawer'

let socket


const RoomLandingPage = () => {

    const [users, setUsers] = useState('')
    const [roooms, setRooms] = useState('')
    const ENDPOINT = 'localhost:4000'

    useEffect(() => {
        socket = io(ENDPOINT)

        socket.on("connect", () => {
            console.log(socket.connected)
        })



    }, [socket])

    return (
        <div className="RoomLandingPage">
            <div className="RoomLandingPageHeader">
                <RoomLandingPageHeader/>
            </div>
            <div className="RoomListings">
                <div className="RoomListing">
                    <Room/>
                </div>
            </div>

            <div className="OnlineStatusSideDrawer">
                <OnlineStatusSideDrawer/>

            </div>

            
        </div>
    )

}

export default RoomLandingPage
