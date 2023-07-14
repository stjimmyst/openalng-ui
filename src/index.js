import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

import './style.css'
import Home from './views/Home'
import Writing from './views/Writing';
import Speaking from './views/Speaking';
import Contacts from './views/Contacts';
import DMCA from './views/DMCA';
import Privacy from './views/Privacy';
import Terms from './views/Terms';

const App = () => {
  return (
    <GoogleOAuthProvider clientId="1057108656456-9kmemaalionafnig1ilp3lvk64c8cmdn.apps.googleusercontent.com">
    <React.StrictMode>
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Writing} exact path="/writing" />
        <Route component={Speaking} exact path="/speaking" />
        <Route component={Contacts} exact path="/contacts" />
        <Route component={Privacy} exact path="/privacy"/>
        <Route component={Terms} exact path="/terms"/>
        <Route component={DMCA} exact path="/dmca"/>
      </div>
    </Router>
    </React.StrictMode>
    </GoogleOAuthProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
