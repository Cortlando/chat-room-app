import React from 'react'
import { Button, AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import './RoomPageHeader.css'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    exitButton: {
      
      textAlign: 'end'
    },
    roomName: {
      flexGrow: 1,
      textAlign:'center'
    },
  }));


const RoomPageHeader = ({ roomName }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}> 
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.roomName}>
                        {roomName}
                    </div>
                    <div>
                        <Link Link to="/">
                            <Button edge="start" className={classes.exitButton}>
                                Leave Room
                            </Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default RoomPageHeader