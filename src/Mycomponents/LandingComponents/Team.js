import React from "react";
import DV from "./img/DV.jpg";
import PC from "./img/PC.jpg";
const Team = () => {
  return (
    <div className=" bg-gray-50 p-6 h-full md:h-screen  flex flex-col items-center justify-center">
      <div className="my-5">
        <h1 className="w-full mt-10 text-3xl md:text-5xl font-bold text-center text-gray-900">
          Our Talented Team
        </h1>
      </div>

      <div className="w-screen md:w-2/3 px-10 py-8 md:mx-auto  ">
        <div className="container mx-auto">
          <div className="lg:flex md:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around pt-4 filter drop-shadow-md ">
            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative ">
              <img
                src={DV}
                alt="img"
                className="h-80 w-64 overflow-hidden mx-auto object-cover rounded shadow"
              />

              <div className=" bg-white flex flex-col justify-center md:w-60 md:h-28 mx-auto absolute rounded shadow -mt-8 right-0 left-0 p-2 ">
                <p className="text-lg md:text-xl text-center text-gray-800 font-medium mb-1">
                  Dharamveer Singh Chouhan
                </p>
                <p className="text-center text-base font-medium text-gray-600">
                  CEO, Zostel
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
              <img
                src={PC}
                alt="img"
                className="h-80 w-64 overflow-hidden mx-auto object-cover rounded shadow"
              />

              <div className=" bg-white flex flex-col justify-center md:w-60 md:h-28 mx-auto absolute rounded shadow -mt-8 right-0 left-0 p-2">
                <p className="text-lg md:text-xl text-center text-gray-800 font-medium mb-1">
                  Karann Dembla
                </p>
                <p className="text-center text-base font-medium text-gray-600">
                  Founder and CEO Zolo Pocker
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
