import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
// import ErrorMessage from "./Error";
import {DataContext} from "../../ContextApi"


function Header() {
  const [parameters,setparameters]= useContext(DataContext);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="fixed z-30 top-0">
      <nav id="header" className="w-screen text-white bg-gray-800">
        <div className="w-screen container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <Link
              to="/"
              className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-3xl align-baseline"
            >
              <svg
                className="h-8 fill-current inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.005 512.005"
              >
                <rect
                  fill="#2a2a31"
                  x="16.539"
                  y="425.626"
                  width="479.767"
                  height="50.502"
                  transform="matrix(1,0,0,1,0,0)"
                />
                <path
                  className="plane-take-off"
                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                />
              </svg>
              TOPGUN.VC
            </Link>
          </div>

          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center bg-gray-800 p-1 text-gray-100 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              onClick={showSidebar}
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            id="nav-content"
            className={`mx-3 w-screen flex-grow lg:flex lg:items-center lg:w-auto  mt-2 lg:mt-0  lg:bg-transparent text-black p-4 lg:p-0 z-20 bg-gray-800 ${
              sidebar ? "" : "hidden"
            }`}
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="font-bold mr-3">
                <Link
                  to="/About"
                  onClick={() => {
                    setSidebar(!sidebar);
                  }}
                  className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                >
                  <button
                    id="navAction"
                    className="lg:mx-0  text-gray-200 hover:text-gray-400  font-thin rounded-md py-2 px-4  opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-75  ease-in-out  text-lg "
                  >
                    ABOUT
                  </button>
                </Link>
              </li>
              <li className="font-bold mr-3">
                <Link
                  to="/Team"
                  onClick={() => {
                    setSidebar(!sidebar);
                  }}
                  className="inline-block text-black no-underline hover:text-gray-100 hover:text-underline py-2 px-4"
                >
                  <button
                    id="navAction"
                    className="lg:mx-0  text-gray-200 hover:text-gray-400  font-thin rounded-md py-2 px-4  opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-75  ease-in-out  text-lg "
                  >
                    TEAM
                  </button>
                </Link>
              </li>
              <li className="font-bold mr-3">
                <Link
                  to="/Bookmarks"
                  onClick={() => {
                    setSidebar(!sidebar);
                  }}
                  className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                >
                  <button
                    id="navAction"
                    className="lg:mx-0  text-gray-200 hover:text-gray-400  font-thin rounded-md py-2 px-4  opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-75  ease-in-out  text-lg "
                  >
                    RESOURCES
                  </button>
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  to="/Login"
                  onClick={() => {
                    setSidebar(!sidebar);
                  }}
                  className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                >
                  <button
                    id="navAction"
                    className="lg:mx-0  text-gray-100 hover:text-white hover:bg-gray-500 font-thin rounded-md py-2 px-4  opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-75  ease-in-out  text-lg   bg-gray-700"
                  >
                    LOG-IN
                  </button>
                </Link>
              </li>
              <li className="mr-3 hidden">
                <Link
                  to="/Signup"
                  onClick={() => {
                    setSidebar(!sidebar);
                  }}
                  className="mr-8 inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                >
                  <button
                    id="navAction"
                    className="lg:mx-0  text-gray-200 hover:text-gray-400  font-thin rounded-md py-2 px-4  opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-75  ease-in-out  text-lg "
                  >
                    Sign-up
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="opacity-30 my-0 py-0" />
      </nav>
      
      {
        parameters[0].error==null?" " :
          <div className="border-red-800 flex justify-between text-red-900 border-2 m-1 bg-red-400 bg-opacity-90 rounded-md">
            <p className="m-4">{parameters[0].error}</p>
            <button className="mx-6" onClick={() => setparameters([

              {
                accessToken: null,
                refreshToken: null,
                error: null,
                loading: false
              }


            ])}>x</button>
          </div>
      
      }
      

    </div>
  );
}


export default Header;
