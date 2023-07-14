import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export function getCardColor(score) {
    let res = ""
    if (score >= 0 && score <= 4) {
        res = "resultcard-low"

    } else if (score > 4 && score < 6) {
        res = "resultcard-medium"

    } else {
        res = "resultcard-high"
    }
    return res

}

export function getBlurColor(stub) {
    let res = ""
    if (stub==true) {
        res =  ""
    } else if (stub==false) {
        res =  "only-login-user"
    }
    return res
}

export function GetUserToken() {
    let profile = Cookies.get('userprofile')
    console.log(profile);
    if (typeof(profile) == "undefined") {
        console.log("no cookie found, wait for login")
        return "undefined"
    } else {
        return profile
    }
}

export function GetUserLevel() {
    let profile = Cookies.get('userlevel')
    console.log(profile);
    if (typeof(profile) == "undefined") {
        return 0
    } else {
        return profile
    }
}

export function GetEstimation(cookie_name) {
    let res = Cookies.get(cookie_name)
    if (typeof(res) == "undefined") {
        return "undefined"
    } else {
        let tmp = JSON.parse(res)
        console.log(tmp)
        return tmp
    }
}



export function GetUserName() {
    let profile = Cookies.get('userprofile')
    console.log(profile);
    if (typeof(profile) == "undefined") {
        console.log("no cookie found, wait for login")
        return "undefined"
    } else {
        return profile
    }
}

export function GetStubText(userlevel) {
    if (userlevel == 0) {
        return "Please LogIn to see results"
    } else {
        return "Not avaliable in your plan"
    }
}

export function GetOverallScoreText(userlevel, overall) {
    console.log(userlevel)
    if (userlevel < 2) {
        return ""
    } else {
        return "Overall: "+ overall
    }
}

export function StringToMarkup(inp) {
    let tmp = inp.split("\n")
    console.log(tmp)
    return tmp.map(element => {
        return (<p className="sec-info__text-element">{element}<br/></p>)
    });
}

export function GetBandScoreText(userlevel, badnscore, stub) {
    console.log(userlevel)
    if (userlevel == 0) {
        return ""
    } else if (userlevel == 1 && stub == true) {
        return ""
    } else {
        return badnscore
    } 
}

export function scrollElement(inpname){
    if (inpname != null) {
    var element = document.getRootNode().getElementById(inpname);
    element.scrollIntoView();
    }
   }


export const logIn = (props) => {

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
      }

      let localtoken = Cookies.get('usertoken')
      if (typeof(localtoken) == "undefined") {
        console.log("no cookie found, wait for login")
        useGoogleLogin({
            onSuccess: (codeResponse) => {
              Cookies.set('usertoken', codeResponse.access_token, { expires: 7 });          
            },
            onError: (error) => console.log('Login Failed:', error)
        });
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
                    LoginBackend(res.data);

                    
                })
                .catch((err) => console.log(err));
        
    }

    
}


