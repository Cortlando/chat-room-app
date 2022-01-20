import {render, screen, cleanup} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

import RoomListings from '../RoomListings'

let container = null
afterEach(() =>{
    cleanup();
})

beforeEach(() =>{
    container = document.createElement("div");
    document.body.appendChild(container)
})

test('Checks if it creates the list of room listings', () =>{
    const list = ['Room1', 'Room2', 'Room3']
    const element = render(<BrowserRouter><RoomListings cleanedRoomList = {list}/></BrowserRouter>)
    console.log(element)
})