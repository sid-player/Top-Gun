import React,{useContext} from 'react'

import Header from "../Mycomponents/LandingComponents/Header";
import Login from "../Mycomponents/LandingComponents/Login";
import {Redirect} from "react-router-dom";
import {DataContext} from "../ContextApi"

// import Loading from "./LoadingScreen"

function LoginContainer() {
    const parameters = useContext(DataContext)[0];
    if(parameters[0].accessToken==null && parameters[0].refreshToken==null)
    {
        return (
            <>
                <Header />
                <Login/>
            </>
        )
    }
   
   
}



export default LoginContainer;