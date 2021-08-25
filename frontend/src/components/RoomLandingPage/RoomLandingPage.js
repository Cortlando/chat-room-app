import React, { useContext, useEffect, useState } from 'react'

import io from 'socket.io-client'

import './RoomLandingPage.css'

import RoomLandingPageHeader from './RoomLandingPageHeader/RoomLandingPageHeader'
import RoomListings from './RoomListings/RoomListings'
import SocketContext from '../../SocketContext'

//let socket





//TODO: ReAdd the OnlineStatusSideDrawer and figure out how to make it not cover the header
//TODO: DONE()Add an indentifer to user made room names that will let me filter them out from the automatically made room names
//      DONE(Make rooms an Array, that might make it work)Then make it so each room gets its own listing
//      Then figure out how to make the rooms joinable

const RoomLandingPage = () => {

    
    const [rooms, setRooms] = useState('')
    const [cleanedRoomList, setCleanedRoomList] = useState([])
    const [isLoading, setLoading] = useState(true)
    

    const socket = useContext(SocketContext)
    
    

    useEffect(() => {


        socket.on("sentRooms", (arg) => {
            //Gets stringifyed array of room names from server
            console.log(arg.roomList)
            console.log(typeof(arg.roomList))
            setRooms(arg.roomList)
            //console.log(rooms)
        })

        setLoading(false)
    }, [socket, rooms])

    //console.log(rooms)

    useEffect(() =>{

        if(rooms !== ""){
            console.log(rooms)
            console.log("Got rooms")
            let roomList = JSON.parse(rooms)
            console.log(roomList)
            for(let i = 0; i < roomList.length; i++){
                if(roomList[i][0].includes('+')){
                    // cleanedRoomList.push(roomList[i][0].slice(0, roomList[i][0].length -1 ))
                    setCleanedRoomList( oldList => [...oldList, roomList[i][0].slice(0, roomList[i][0].length -1 )])
                }
            }

           // console.log(cleanedRoomList)

        }
    }, [rooms])

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
                    <RoomLandingPageHeader />
                </div>
                <div className="RoomListings">
                  <RoomListings cleanedRoomList={cleanedRoomList}/>
                </div>
    

    
    
            </div>
        )
    }


}

export default RoomLandingPage
