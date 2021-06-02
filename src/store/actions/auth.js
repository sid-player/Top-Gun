import * as actionTypes from "./actionTypes"
import axios from 'axios'

// Basic 4 AUTH_.....
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
export const authSuccess = (accessToken,refreshToken) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        accessToken: accessToken,
        refreshToken: refreshToken
    }
}
export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}
export const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

// Holding Functions ->
export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(logout());
        }, expirationTime)
    }
}
export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post("https://topgun-test1.herokuapp.com/login/",{
            username: username,
            password: password
        })
        .then(res => {
            const accessToken = res.data.access;
            const refreshToken = res.data.refresh;
            const expirationDate = new Date(new Date().getTime() + 3600*1000);
            localStorage.setItem("accessToken",accessToken);
            localStorage.setItem("refreshToken",refreshToken);
            localStorage.setItem("expirationDate",expirationDate);
            dispatch(authSuccess(accessToken,refreshToken));
            checkAuthTimeout(3600)
        })
        .catch( error => {
            dispatch(authFail(error.response.data.detail))
        })
    }
}
export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post("https://topgun-test1.herokuapp.com/",{
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
        .then(res => {
            const accessToken = res.data.access;
            const refreshToken = res.data.refresh;
            const expirationDate = new Date(new Date().getTime() + 3600*1000);
            localStorage.setItem("accessToken",accessToken);
            localStorage.setItem("refreshToken",refreshToken);
            localStorage.setItem("expirationDate",expirationDate);
            dispatch(authSuccess(accessToken,refreshToken));
            checkAuthTimeout(3600)
        })
        .catch(error => {
            let data = error.response.data
            let message = "";
            if(data.error)message=data.error
            if(data.username)message=data.username[0]
            if(data.email)message=data.email[0]
            dispatch(authFail(message))
        })
    }
}
export const authCheckState = () => {
    return dispatch => {
        const refreshToken = localStorage.getItem('refreshToken');
        if(refreshToken===null){
            dispatch(logout());
        }
        else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= Date() ) {
                dispatch(logout());
            }
            else {
                dispatch(authSuccess());
                dispatch(checkAuthTimeout( (expirationDate.getTime()-new Date().getTime()) /1000 ));
            }
        }
    }
}