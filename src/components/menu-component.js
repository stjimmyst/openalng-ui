import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import NavigationLinks from './navigation-links'
import './menu-component.css'
import Login from '../views/login'
import Cookies from 'js-cookie';

const MenuComponent = React.forwardRef((props, ref) => {

  const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

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

    }
  


    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
          Cookies.set('usertoken', codeResponse.access_token, { expires: 7 });
          setUser(codeResponse)
          
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
          let localtoken = Cookies.get('usertoken')
          if (typeof(localtoken) == "undefined") {
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
                      Cookies.set('userprofile', res.data.id, { expires: 7 });
                        setProfile(res.data);
                        LoginBackend(res.data);

                        
                    })
                    .catch((err) => console.log(err));
            
        }},
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        Cookies.remove('usertoken');
        Cookies.remove('userprofile');
        Cookies.remove('userlevel')
        setProfile([]);
    };

  return (
    <div className={`menu-component-container ${props.rootClassName} `}>
      <header data-role="Header" className="menu-component-menu">
        <h1 className="logo-text">OpenLang</h1>
        {/* <img
          alt="logo"
          src="/external/logo.png"
          className="menu-component-image"
        /> */}
        <div className="menu-component-nav">
          <NavigationLinks
            rootClassName="rootClassName10"
            className=""
          ></NavigationLinks>
        </div>
        {
        profile.length != 0 ?
         (
          
//                 <div class="round">
//                     <span class="circle-image">
//  <img src={profile.picture}/>
// </span>
//                     {/* <img src={profile.picture} alt="user image" /> */}
//                     <button className="menu-component-login button" onClick={logOut}>Log out</button>
//                 </div>
                <div className="menu-component-btn-group">
                <div className="menu-component-container1">
                  <a href="https://billing.stripe.com/p/login/test_aEU4hobng6OCaUU7ss" target="_blank">
                  <img
                    src={profile.picture}
                    className="menu-component-image1"
                    
                  />
                  </a>
                </div>
                <div className="menu-component-container2">
                  <button className="button" onClick={() => logOut()}>Log Out</button>
                </div>
              </div>
                
                





            ) : (
              <div className="menu-component-btn-group">
                <div className="menu-component-container1">
                </div>
                <div className="menu-component-container2">
                <button className="menu-component-login button" onClick={() => login()} ref={ref}>Log In </button>
                </div>
              </div>
            )}
      </header>
    </div>
  )
})

MenuComponent.defaultProps = {
  rootClassName: '',
  registerOnClick: () => {},
}

MenuComponent.propTypes = {
  rootClassName: PropTypes.string,
  registerOnClick: PropTypes.func,
}

export default MenuComponent
