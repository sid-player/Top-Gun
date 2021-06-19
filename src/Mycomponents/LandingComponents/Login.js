import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";


function Login(props) {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const HandelForm = event => {
    event.preventDefault();
    props.login(username,password);
  }
  
  return (
    <>
      <div className="container w-screen">
        <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-8 ">
        <div className=" w-full max-w-xl space-y-4 bg-gray-50 shadow-lg   p-8 md:px-16
           md:pb-16 md:pt-8 -mt-16 rounded-b-md">
            <div>
              <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              
              <h2 className="mt-6 text-center text-2xl  font-medium text-gray-700">
               Welcome Back!
              </h2>
            </div>
            <form className="mt-auto space-y-6" onSubmit={event=>HandelForm(event)} method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px">
                <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <div className="  font-normal  text-gray-800">
                    Username
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="email"
                    required
                    className="appearance-none relative block w-full  py-1 md:px-3 md:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  mb-3 md:mb-4 bg-gray-100"
                    placeholder=""
                    value={username}
                    onChange={event=>{setUsername(event.target.value)}}
                  />
                </div>
                <div >
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <div className=" text-gray-800 font-normal">
                    Password
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none  relative block w-full  py-1 md:px-3 md:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3 md:mb-4 bg-gray-100"
                    placeholder=""
                    value={password}
                    onChange={event=>{setPassword(event.target.value)}}
                  />
                </div>
              </div>
              <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300" >
                 Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username,password)=>dispatch(actions.authLogin(username,password))
  }
}

export default connect(null,mapDispatchToProps)(Login)