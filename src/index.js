import React, { useState, useEffect, useRef,useReducer } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

import './style.css'
import Home from './views/home'
import WritingGeneral from './views/writing_general';
import SpeakingGeneral from './views/speaking-general';
import IeltsWriting from './views/ielts-writing';
import IeltsSpeaking from './views/ielts-speaking';
import IeltsReading from './views/ielts-reading';
import CelpipWriting from './views/celpip-writing';
import CelpipSpeaking from './views/celpip-speaking';
import UserContext from './components/user';
import { GetUserToken } from './components/functions';

import Contacts from './views/contacts';
import DMCA from './views/dmca';
import Privacy from './views/privacy';
import Terms from './views/terms';
import ReadingGeneral from './views/reading-general';

const App = () => {
  const [isAuth, setIsAuth] = useState(checkUserState());
  const value = { isAuth, setIsAuth };


  function checkUserState() {
    var tp = GetUserToken()
    if (tp == "undefined") {
      return false
    } else {
      return true
    }
  }

  useEffect(
    () => {
      console.log("from APP isAuth="+isAuth)
    }
  )


  return (
    <GoogleOAuthProvider clientId="1057108656456-9kmemaalionafnig1ilp3lvk64c8cmdn.apps.googleusercontent.com">
    <React.StrictMode>
    <Router>
      <div>
      <UserContext.Provider value={value}>
      {/* <ReadingContext.Provider value={reading_value}></ReadingContext.Provider> */}
        <Route component={Home} exact path="/" />
        <Route component={WritingGeneral} exact path="/writing" />
        <Route component={SpeakingGeneral} exact path="/speaking" />
        <Route component={ReadingGeneral} exact path="/reading" />
        <Route component={IeltsWriting} exact path="/writing_ielts" />
        <Route component={IeltsSpeaking} exact path="/speaking_ielts" />
        <Route component={IeltsReading} exact path="/reading_ielts" />
        <Route component={CelpipWriting} exact path="/writing_celpip" />
        <Route component={CelpipSpeaking} exact path="/speaking_celpip" />
        <Route component={Contacts} exact path="/contacts" />
        <Route component={Privacy} exact path="/privacy"/>
        <Route component={Terms} exact path="/terms"/>
        <Route component={DMCA} exact path="/dmca"/>
        </UserContext.Provider>
      </div>
    </Router>
    </React.StrictMode>
    </GoogleOAuthProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
