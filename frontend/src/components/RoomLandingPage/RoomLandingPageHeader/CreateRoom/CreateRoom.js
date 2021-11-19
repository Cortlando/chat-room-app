import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Modal, TextField, Input, Button } from '@material-ui/core/'
import { Link } from 'react-router-dom';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));



const CreateRoom = ({open, handleClose }) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [roomName, setRoomName] = useState('')

   // console.log(rooms, setRooms, open, setOpen, handleOpen, handleClose)


    const modalBody = (
        <div style={modalStyle} className={classes.paper}>
            <div className="ModalHeader">
                Enter Room Name:
            </div>
            <div className="RoomEntryField">
                <Input type="text" value={roomName} onChange={e => setRoomName(e.target.value)}>

                </Input>
            </div>
            <div className="RoomNameSubmitButton">
                <Link onClick={e=> !roomName ? e.preventDefault() : null} to={`/room?roomName=${roomName}`}>
                    <Button type="submit">Create</Button>
                </Link>
            </div>
        </div>
    )
    // Create the socket and move to a different component using <Link> when you click the create button


    return (
        <Modal
            open={open}
            onClose={handleClose}>
            {modalBody}
        </Modal>
    )


}

export default CreateRoom