import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

import './style.css'
import Speaking from './views/speaking'
import Home from './views/home'
import Writing from './views/writing'
import Login from './views/login'

const App = () => {
  return (
    <GoogleOAuthProvider clientId="1057108656456-9kmemaalionafnig1ilp3lvk64c8cmdn.apps.googleusercontent.com">
    <React.StrictMode>
    <Router>
      <div>
        <Route component={Speaking} exact path="/speaking" />
        <Route component={Home} exact path="/" />
        <Route component={Writing} exact path="/writing" />
        <Route component={Login} exact path="/login" />
      </div>
    </Router>
    </React.StrictMode>
    </GoogleOAuthProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
