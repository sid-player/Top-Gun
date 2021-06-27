import React,{useContext} from 'react'

import Header from "../Mycomponents/LandingComponents/Header";
import Signup from "../Mycomponents/LandingComponents/Signup";
import {DataContext} from "../ContextApi"
import {Redirect} from "react-router-dom";

import Loading from "./LoadingScreen"

function SignupContainer(props) {
    const [parameters,setparameters]= useContext(DataContext);
    if(parameters[0].accessToken==null && parameters[0].refreshToken==null)
    {
        return (<Signup/>)
    }
    return <Redirect to="/Home"/>
  
}

export default SignupContainer;
