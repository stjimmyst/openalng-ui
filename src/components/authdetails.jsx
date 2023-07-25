import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthDetails = (props) => {
const [authUser,setAuthUser] = useState(null)
useEffect(()=>{
    ///const liste = 
    if (user) {
        setAuthUser(user)
    } else {
        setAuthUser(null)
    }
},[])
return <div>AuthDetails</div>

}

export default AuthDetails