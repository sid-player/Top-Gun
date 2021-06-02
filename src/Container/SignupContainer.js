import React from 'react'

import Header from "../Mycomponents/LandingComponents/Header";
import Signup from "../Mycomponents/LandingComponents/Signup";
import {Redirect} from "react-router-dom";
import { connect } from "react-redux"
import Loading from "./LoadingScreen"

function SignupContainer(props) {

    if(props.loggedin)
    {
        return <Redirect to="/Home"/>
    }
    return (
        <>
            <Header />
            {props.loading ? <Loading /> : <Signup/>}
        </>
    )
}

const mapStateToProps = state => {
    return {
        loggedin: state.accessToken,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(SignupContainer);
