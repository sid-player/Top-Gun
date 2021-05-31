import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
function Login(props) {
  let style = {
    background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const HandelForm = event => {
    event.preventDefault();
    props.login(username,password);
  }
  
  return (
    <>
      <div className="container">
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"  style={style}>
          <div className="max-w-md w-full space-y-8 ">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
                Log in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={event=>HandelForm(event)} method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="email"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                    placeholder="Username"
                    value={username}
                    onChange={event=>{setUsername(event.target.value)}}
                  />
                </div>
                <div >
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                    placeholder="Password"
                    value={password}
                    onChange={event=>{setPassword(event.target.value)}}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                >
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