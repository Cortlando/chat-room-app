import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'

import RoomLandingPageHeader from '../RoomLandingPageHeader'


let container = null
afterEach(() =>{
    cleanup();
})

beforeEach(() =>{
    container = document.createElement("div");
    document.body.appendChild(container)
})

test('should display "Click to create a room(Refresh to see rooms)"', () => {
    render(<RoomLandingPageHeader/>)

    let element = screen.getByTestId(`Tid1`)

    //console.log(element)
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Click to create a room(Refresh to see rooms)")
   // expect(element).toContainHTML('<h6>')
    
})

test('matches snapshot', ()=>{
    const tree = renderer.create(<RoomLandingPageHeader/>).toJSON();
    expect(tree).toMatchSnapshot();

})

