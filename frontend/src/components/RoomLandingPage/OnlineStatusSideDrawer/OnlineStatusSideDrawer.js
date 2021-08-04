import React from 'react'

import { Drawer } from '@material-ui/core'

import './OnlineStatusSideDrawer.css'

const OnlineStatusSideDrawer = () => {
    return (
        <Drawer anchor="right" variant="persistent" open="true">
            <div className="UsersOnline">
                Users Online 8000
            </div>

            <div className="ListOfUsers">
                <p>Rick</p>
                <p>Bob</p>
                <p>Jannent</p>

            </div>



        </Drawer>
    )
}

export default OnlineStatusSideDrawer