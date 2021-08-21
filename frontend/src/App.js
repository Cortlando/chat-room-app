
import React from 'react';

import {  Route, Switch, HashRouter} from 'react-router-dom'

import RoomLandingPage from './components/RoomLandingPage/RoomLandingPage'
import Room from './components/Room/Room'

import io from 'socket.io-client'
import SocketContext from './SocketContext'

const ENDPOINT = "http://node-express-env.eba-favsdmnr.us-east-2.elasticbeanstalk.com/"
const socket = io(ENDPOINT)

function App() {
  return (
    <div className="App">
      <SocketContext.Provider value={socket}>
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={RoomLandingPage}/>
            <Route path="/room" component={Room}/>
          </Switch>
        </div>
      </HashRouter>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
