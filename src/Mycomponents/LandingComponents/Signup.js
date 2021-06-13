import React,{ useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";

function Signup(props) {
  let style = {
    background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
  };

  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password1,setPassword1] = useState("")
  const [password2,setPassword2] = useState("")
  
  const HandleForm = event => {
    event.preventDefault();
    props.Signup(username,email,password1,password2);
  } 
  
  return (
    <>
      <div className="w-screen">
        <div
          className="min-h-screen h-screen w-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 md:py-0 lg:px-8 xl:py-12 
          md:h-screen lg:h-screen"
          style={style}
        >
          <div className="max-w-md w-full space-y-8 ">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
                Sign Up
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={event=>{HandleForm(event)}}>
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
                    onChange={event=>setUsername(event.target.value)}
                  />
                </div>
                <div>
               
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="current-password"
                    required
                    className="appearance-none e relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2 "
                    placeholder="Email"
                    value={email}
                    onChange={event=>setEmail(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2 "
                    placeholder="Password"
                    value={password1}
                    onChange={event=>setPassword1(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="rpassword"
                    name="rpassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                    placeholder="Re-Enter-Password"
                    value={password2}
                    onChange={event=>setPassword2(event.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                >
                  Sign-up
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
    Signup: (username,email,password1,password2)=>dispatch(actions.authSignup(username,email,password1,password2))
  }
}

export default connect(null,mapDispatchToProps)(Signup)