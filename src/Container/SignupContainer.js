import React,{useContext} from 'react'

import Header from "../Mycomponents/LandingComponents/Header";
import Signup from "../Mycomponents/LandingComponents/Signup";
import {DataContext} from "../ContextApi"
import {Redirect} from "react-router-dom";

// import Loading from "./LoadingScreen"

function SignupContainer(props) {
    const parameters = useContext(DataContext)[0];
    if(parameters[0].accessToken==null && parameters[0].refreshToken==null)
    {
        return (
        <>
        <Header/>
        <div className=" mt-12"></div>
        <Signup/>
        </>
        )
    }
    return <Redirect to="/"/>
  
}

export default SignupContainer;
