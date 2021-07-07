import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import ErrorMessage from "./Error";
import { DataContext } from "../../ContextApi";

function Header() {
  const [parameters, setparameters] = useContext(DataContext);
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
                  to="/about"
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
                  to="/team"
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
                  to="/bookmarks"
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
                  to="/login"
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
                  to="/signup"
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

      {parameters[0].error == null ? (
        " "
      ) : (
        <div className="border-red-800 flex justify-between text-red-900 border-2 m-1 bg-red-400 bg-opacity-90 rounded-md">
          <p className="m-4">{parameters[0].error}</p>
          <button
            className="mx-6"
            onClick={() =>
              setparameters([
                {
                  accessToken: null,
                  refreshToken: null,
                  error: null,
                  loading: false,
                },
              ])
            }
          >
            x
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
