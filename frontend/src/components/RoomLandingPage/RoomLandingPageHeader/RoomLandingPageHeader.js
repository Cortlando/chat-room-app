import React from 'react'

import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import AddIcon from '@material-ui/icons/Add'


import CreateRoom from './CreateRoom/CreateRoom'
import LoginButton from './LoginButton/LoginButton'
import LogoutButton from './LogoutButton/LogoutButton'
import Profile from './Profile/Profile'

// TODO: Add a profile picture to the header. Question mark when logged out, profile picture( or first letter of their name) when logged in
const RoomLandingPageHeader = ({ rooms, setRooms }) => {

    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    console.log(rooms, setRooms)
    return (
        <AppBar position="static" >
            <Toolbar>
                <Typography align="left">
                    <IconButton onClick={handleOpen}>
                        <AddIcon />
                    </IconButton>
                    <CreateRoom open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose}/>
                    Click to create a room
                    <LoginButton/>
                    <LogoutButton/>
                    <Profile/>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}



export default RoomLandingPageHeader


