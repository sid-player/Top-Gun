import React from 'react'

import Header from "../Mycomponents/LandingComponents/Header";
import Login from "../Mycomponents/LandingComponents/Login";
import {Redirect} from "react-router-dom";
import { connect } from "react-redux"
import Loading from "./LoadingScreen"

function LoginContainer(props) {

    if(props.loggedin)
    {
        return <Redirect to="/Home"/>
    }
    return (
        <>
            <Header />
            {props.loading ? <Loading /> : <Login/>}
        </>
    )
}

const mapStateToProps = state => {
    return {
        loggedin: state.accessToken,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(LoginContainer);
