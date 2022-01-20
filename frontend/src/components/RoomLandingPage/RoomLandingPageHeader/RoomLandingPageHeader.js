import React from 'react'

import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'


import CreateRoom from './CreateRoom/CreateRoom'
import LoginButton from './LoginButton/LoginButton'
import LogoutButton from './LogoutButton/LogoutButton'
import Profile from './Profile/Profile'

import { useAuth0 } from '@auth0/auth0-react'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const RoomLandingPageHeader = ({ rooms, setRooms }) => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const { isAuthenticated } = useAuth0()

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //console.log(rooms, setRooms)

    
    return (
        <div className={classes.root} >
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleOpen}>
                <AddIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title} data-testid={`Tid1`}>
                Click to create a room(Refresh to see rooms)
              </Typography>
              <CreateRoom open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} />
              {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
                <Profile/>
            </Toolbar>
          </AppBar>
        </div>
      );

}



export default RoomLandingPageHeader


