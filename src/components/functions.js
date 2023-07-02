import Cookies from 'js-cookie';

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
    console.log("userlevel = "+userlevel)
    if (userlevel == 0) {
        return "Please LogIn to see results"
    } else if (userlevel == 1) {
        return "Not avaliable in your plan"
    }
}
