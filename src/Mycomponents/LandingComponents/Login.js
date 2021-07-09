import React, { useState , useContext} from "react";
import {DataContext} from "../../ContextApi"
import axios from "axios";




function Login() {
 
  const [parameters,setparameters]= useContext(DataContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  


  
  const HandelForm = event => {
    event.preventDefault();

    axios.post("https://topgun-test1.herokuapp.com/login/",{
            username: username,
            password: password
        })
        .then(res => {
            const accessToken = res.data.access;
            const refreshToken = res.data.refresh;
            
            localStorage.setItem("accessToken",accessToken);
            localStorage.setItem("refreshToken",refreshToken);
            setparameters([
           
              {
                   accessToken : accessToken,
                   refreshToken : refreshToken,
                   error : null,
                   loading : false
               }
           
          
          ])
           
        })
        .catch( error => {
          let data = error.response.data.detail
          setparameters([
           
            {
                 accessToken : null,
                 refreshToken : null,
                 error : data,
                 loading : false
             }
         
        
        ])
      })     
  }

  return (
    <>
      <div className="container w-screen">
        <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-8 ">
        <div className=" w-full max-w-xl space-y-4 bg-gray-50 shadow-lg   p-8 md:px-16
           md:pb-16 md:pt-8 -mt-16 rounded-b-md">
            <div>
              <img className="mx-auto h-12 w-auto" src="data:image/jpeg;base64,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" alt="Workflow" />
              
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
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300" >
                  {/* <h1>{parameters[0].accessToken}</h1> */}
                  Login
                </button>
              </div>
            </form>
            <div className="text-black">
        Create a new account? <a href="/signup" className="text-blue-600 underline">SignUp</a>
      </div>
          </div>
        </div>
      </div>
      
      </>

    
  );
}


export default Login