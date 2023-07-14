import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Cookies from 'js-cookie';

const Header = React.forwardRef((props, ref) => {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);
    async function LoginBackend(inpprofile) {
        console.log(inpprofile)
        const response = await fetch("/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                profile: inpprofile
            })
        });
        const data = await response.json();
        let json = JSON.stringify(data);
        console.log(json);
        Cookies.set('userlevel', data.level);
        console.log(`${process.env.NODE_ENV}`)
        console.log(`${process.env.REACT_APP_USER_SUBSCRIPTIONS}`)

    }
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            Cookies.set('usertoken', codeResponse.access_token, { expires: 7 });
            setUser(codeResponse)

        },
        onError: (error) => console.log('Login Failed:', error)
    });

    const logOut = () => {
        googleLogout();
        Cookies.remove('usertoken');
        Cookies.remove('userprofile');
        Cookies.remove('userlevel')
        setProfile([]);
    };

    useEffect(
        () => {
            let localtoken = Cookies.get('usertoken')
            if (typeof (localtoken) == "undefined") {
                console.log("no cookie found, wait for login")
            } else {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${localtoken}`, {
                        headers: {
                            Authorization: `Bearer ${localtoken}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        Cookies.set('userprofile', res.data.id);
                        setProfile(res.data);
                        LoginBackend(res.data);


                    })
                    .catch((err) => console.log(err));

            }
        },
        [user]
    );

    return (
        <>
        <header className="header">
            <div className="container">
                {/* <div className="header__left">
                    <div className="header__burger">
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M4.375 10.2083C4.375 9.40292 5.02792 8.75 5.83333 8.75H29.1667C29.9721 8.75 30.625 9.40292 30.625 10.2083C30.625 11.0137 29.9721 11.6667 29.1667 11.6667H5.83333C5.02792 11.6667 4.375 11.0137 4.375 10.2083ZM4.375 17.5C4.375 16.6946 5.02792 16.0417 5.83333 16.0417H20.4167C21.2221 16.0417 21.875 16.6946 21.875 17.5C21.875 18.3054 21.2221 18.9583 20.4167 18.9583H5.83333C5.02792 18.9583 4.375 18.3054 4.375 17.5ZM5.83333 23.3333C5.02792 23.3333 4.375 23.9863 4.375 24.7917C4.375 25.5971 5.02792 26.25 5.83333 26.25H11.6667C12.4721 26.25 13.125 25.5971 13.125 24.7917C13.125 23.9863 12.4721 23.3333 11.6667 23.3333H5.83333Z"
                                fill="black" />
                        </svg>
                    </div>
                </div> */}
                <a href="/" className="header__logo">
                    <img src="img/_src/logo.svg" alt="" className="header__logo-img" />
                </a>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-element">
                            {/* <Link to="/" className="header__nav-link">About</Link> */}
                            <a href="/" className="header__nav-link">About</a>
                        </li>
                        <li className="header__nav-element">
                            {/* <Link to="/writing" className="header__nav-link">Writing</Link> */}
                            <a href="/writing" className="header__nav-link">Writing</a>
                        </li>
                        {/* <Link to="/speaking" className="header__nav-link">Speaking</Link> */}
                        <li className="header__nav-element">
                            {/* <a href="speaking.html" className="header__nav-link">Speaking</a> */}
                            <a href="/speaking" className="header__nav-link">Speaking</a>
                        </li>
                        <li className="header__nav-element">
                            <a href="/contacts" className="header__nav-link">Contacts</a>
                        </li>
                    </ul>
                </nav>
                {
                    profile.length != 0 ? (
                        <>
                        <a href={process.env.REACT_APP_USER_SUBSCRIPTIONS} target="_blank" className="header__user user">
                            <img src={profile.picture} alt="" className="user__image" />
                            <p class="user__name">{profile.given_name}</p>
                        </a>
                        <button className="header__btn btnV1" onClick={() => logOut()} >Log out</button>
                    </>
                    ) : (
                        <div className="header__right">
                        <button className="header__btn btnV1" onClick={() => login()} ref={ref}>Log in</button>

                    </div>
                    )}


            </div>
        </header>
        {/* <script src="../scripts.min.js"></script> */}
        </>
    )
})

Header.defaultProps = {
    registerOnClick: () => {},
  }
  
  Header.propTypes = {
    registerOnClick: PropTypes.func,
  }

export default Header