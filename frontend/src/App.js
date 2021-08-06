
import React from 'react';
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import RoomLandingPage from './components/RoomLandingPage/RoomLandingPage'
import Room from './components/Room/Room'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={RoomLandingPage}/>
            <Route path="/room" component={Room}/>
          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
