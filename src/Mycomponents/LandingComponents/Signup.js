import React,{ useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";

function Signup(props) {
  

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
      <div className="w-screen bg-gray-500">
        <div
          className=" h-2/3 w-screen flex items-center justify-center  px-4 sm:px-6 md:py-10 lg:px-8 xl:py-12 
           bg-gray-50 pb-96"
         
        >
          <div className=" w-full max-w-xl space-y-4 bg-gray-50 shadow-lg   p-8 md:px-16
           md:pb-16 md:pt-8 -mt-4 rounded-b-md">
            <div>
              <img
                className="mx-auto h-8 w-auto"
                src="https://www.act.org/content/dam/act/unsecured/Images/2020/icon-medium-blue-register.png"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-2xl  font-medium text-gray-700">
                Sign In to Get Exclusive Benifits!
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={event=>{HandleForm(event)}}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className=" -space-y-px">
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
                    onChange={event=>setUsername(event.target.value)}
                  />
                </div>
                <div>
               
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <div className=" text-gray-800 font-normal">
                    Email
                  </div>
                  
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="current-password"
                    required
                    className="appearance-none e relative block w-full  py-1 md:px-3 md:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3 md:mb-4  bg-gray-100"
                    placeholder=""
                    value={email}
                    onChange={event=>setEmail(event.target.value)}
                  />
                </div>
                <div>
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
                    value={password1}
                    onChange={event=>setPassword1(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <div className=" text-gray-800 font-normal" >
                  Re-Enter-Password
                  </div>
                  <input
                    id="rpassword"
                    name="rpassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none relative block w-full  py-1 md:px-3 md:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3 md:mb-4 bg-gray-100"
                    placeholder=""
                    value={password2}
                    onChange={event=>setPassword2(event.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm  font-medium  rounded-md text-gray-100 bg-blue-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300  mt-8"
                >
                  SIGN UP
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