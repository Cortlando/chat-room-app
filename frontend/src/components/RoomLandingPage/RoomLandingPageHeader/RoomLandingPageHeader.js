import React from 'react'

import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const RoomLandingPageHeader = () => {

    return (
        <AppBar position="static" color="blue">
            <Toolbar>
                <Typography align="left">
                    <IconButton>
                        <AddIcon />     
                    </IconButton>
                    Click to create a room
                </Typography>


            </Toolbar>
        </AppBar>
    )
}

export default RoomLandingPageHeader


