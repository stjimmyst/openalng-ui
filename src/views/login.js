import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './login.css'



const Login = () => {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
        location.reload()
    };

    return (
        <div>
            {profile ? (
                <div class="round">
                    <span class="circle-image">
 <img src={profile.picture}/>
</span>
                    {/* <img src={profile.picture} alt="user image" /> */}
                    <button className="menu-component-login button" onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button className="menu-component-login button" onClick={() => login()}>Log In </button>
            )}
        </div>
    );

}

export default Login;