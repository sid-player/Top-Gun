import React, { useState, useContext } from "react";
import { DataContext } from "../../ContextApi";
import axios from "axios";

function Signup() {
  const setparameters = useContext(DataContext)[1];
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const HandleForm = (event) => {
    event.preventDefault();
    axios
      .post("https://topgun-test1.herokuapp.com/", {
        username: username,
        email: email,
        password1: password1,
        password2: password2,
      })
      .then((res) => {
        const accessToken = res.data.access;
        const refreshToken = res.data.refresh;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        setparameters([
          {
            accessToken: accessToken,
            refreshToken: refreshToken,
            error: null,
            loading: false,
          },
        ]);
      })
      .catch((error) => {
        let data = error.response.data;
        let message = "";
        if (data.error) message = data.error;
        if (data.username) message = data.username[0];
        if (data.email) message = data.email[0];
        setparameters([
          {
            accessToken: null,
            refreshToken: null,
            error: message,
            loading: false,
          },
        ]);
      });
  };

  return (
    <>
      <div className="w-screen bg-gradient-to-r from-gray-800 to-gray-900">
        <div className=" w-screen flex items-center justify-center  px-4 sm:px-6 md:py-10 lg:px-8 xl:py-12 pb-4 md:pb-96">
          <div
            className=" w-full max-w-xl space-y-4 bg-gray-100 shadow-lg p-8 md:px-16
           md:pb-16 md:pt-8 mt-4 rounded-md"
          >
            <div>
              <img
                className="mx-auto h-8 w-auto"
                src="https://www.act.org/content/dam/act/unsecured/Images/2020/icon-medium-blue-register.png"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-2xl  font-medium text-gray-700">
                Sign Up to Get Exclusive Benefits!
              </h2>
            </div>
            <form
              className="mt-8 space-y-6"
              onSubmit={(event) => {
                HandleForm(event);
              }}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className=" -space-y-px">
                <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <div className="text-gray-900 font-bold">Username</div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="email"
                    required
                    className="appearance-none relative block w-full py-1 md:px-3 md:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  mb-3 md:mb-4 bg-gray-50"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <div className="text-gray-900 font-bold">Email</div>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="current-password"
                    required
                    className="appearance-none e relative block w-full  py-1 md:px-3 md:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3 md:mb-4 bg-gray-50"
                    placeholder="me@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <div className="text-gray-900 font-bold">Password</div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none  relative block w-full  py-1 md:px-3 md:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3 md:mb-4 bg-gray-50"
                    placeholder=""
                    value={password1}
                    onChange={(event) => setPassword1(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <div className="text-gray-900 font-bold">
                    Re-Enter-Password
                  </div>
                  <input
                    id="rpassword"
                    name="rpassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none relative block w-full  py-1 md:px-3 md:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3 md:mb-4 bg-gray-50"
                    placeholder=""
                    value={password2}
                    onChange={(event) => setPassword2(event.target.value)}
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

export default Signup;
