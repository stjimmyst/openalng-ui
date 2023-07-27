import React, { useState, useEffect, useRef,useReducer, useContext} from 'react'
import PropTypes from 'prop-types'

import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Cookies from 'js-cookie';

import UserContext from './user';

function reducer(state, item) {
    return [...state, item]
  }

const Header = React.forwardRef((props, ref) => {

    const { isAuth, setIsAuth } = useContext(UserContext);
    
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);
    const [status, setStatus] = useState("mob-nav");
    const [closeStatus, setCloseStatus] = useState("mob-nav");

    function changeStatus() {
        if (status == "mob-nav") {
			setStatus("mob-nav activ-mob-nav")
		} else {
			setStatus("mob-nav")
		}
    }
    function changeCloseStatus() {
        if (status == "mob-nav") {
			setStatus("mob-nav activ-mob-nav")
		} else {
			setStatus("mob-nav")
		}
    }
    async function LoginBackend(inpprofile) {
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
        Cookies.set('userlevel', data.level);

    }

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            Cookies.set('usertoken', codeResponse.access_token, { expires: 7 });
            
            setUser(codeResponse)
            setIsAuth(true)

        },
        onError: (error) => console.log('Login Failed:', error)
    });

    const logOut = () => {
        googleLogout();
        Cookies.remove('usertoken');
        Cookies.remove('userprofile');
        Cookies.remove('userlevel')
        setProfile([]);
        setIsAuth(false)
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
        <div className={status} >
            <div class="mob-nav__close" onClick={()=>changeCloseStatus()}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M24.6746 6.89679C25.1085 6.46287 25.1085 5.75935 24.6746 5.32544C24.2406 4.89152 23.5371 4.89152 23.1032 5.32544L15 13.4287L6.89679 5.32544C6.46287 4.89152 5.75935 4.89152 5.32544 5.32544C4.89152 5.75935 4.89152 6.46287 5.32544 6.89679L13.4287 15L5.32544 23.1032C4.89152 23.5371 4.89152 24.2406 5.32544 24.6746C5.75935 25.1085 6.46287 25.1085 6.89679 24.6746L15 16.5713L23.1032 24.6746C23.5371 25.1085 24.2406 25.1085 24.6746 24.6746C25.1085 24.2406 25.1085 23.5371 24.6746 23.1032L16.5713 15L24.6746 6.89679Z"
                        fill="black" />
                </svg>
            </div>
            <nav class="mob-nav__nav">
                <ul class="mob-nav__nav-list" onClick={()=>changeCloseStatus()}>
                    {/* <li class="header__nav-element">
                        <a href="/" class="header__nav-link">About</a>
                    </li> */}
                    <li class="header__nav-element">
                        <a href="/writing" class="header__nav-link">Writing</a>
                    </li>
                    <li class="header__nav-element">
                        <a href="/speaking" class="header__nav-link">Speaking</a>
                    </li>
                    <li class="header__nav-element">
                        <a href="/#price" class="header__nav-link">Prices</a>
                    </li>
                    <li class="header__nav-element">
                        <a href="/contacts" class="header__nav-link">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
        <header className="header">
            <div className="container">
                <div className="header__left">
                    <div className="header__burger" onClick={() => changeStatus()}>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M4.375 10.2083C4.375 9.40292 5.02792 8.75 5.83333 8.75H29.1667C29.9721 8.75 30.625 9.40292 30.625 10.2083C30.625 11.0137 29.9721 11.6667 29.1667 11.6667H5.83333C5.02792 11.6667 4.375 11.0137 4.375 10.2083ZM4.375 17.5C4.375 16.6946 5.02792 16.0417 5.83333 16.0417H20.4167C21.2221 16.0417 21.875 16.6946 21.875 17.5C21.875 18.3054 21.2221 18.9583 20.4167 18.9583H5.83333C5.02792 18.9583 4.375 18.3054 4.375 17.5ZM5.83333 23.3333C5.02792 23.3333 4.375 23.9863 4.375 24.7917C4.375 25.5971 5.02792 26.25 5.83333 26.25H11.6667C12.4721 26.25 13.125 25.5971 13.125 24.7917C13.125 23.9863 12.4721 23.3333 11.6667 23.3333H5.83333Z"
                                fill="black" />
                        </svg>
                    </div>
                </div>
                <a href="/" className="header__logo">
                    <img src="img/_src/logo.svg" alt="" className="header__logo-img" />
                </a>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-element">
                           
                            <a href="/writing" className="header__nav-link">Writing</a>
                        </li>
                       
                        <li className="header__nav-element">
                            
                            <a href="/speaking" className="header__nav-link">Speaking</a>
                        </li>
                        {/* <li className="header__nav-element">
                            
                            <a href="/reading_ielts" className="header__nav-link">Reading</a>
                        </li> */}
                        <li className="header__nav-element">
                            
                            <a href="/#price" className="header__nav-link">Prices</a>
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