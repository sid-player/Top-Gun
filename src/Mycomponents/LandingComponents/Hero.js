import React from "react";
import logo from "./img/hero.png";

export default function Hero() {
  return (
    <div className="bg-gray-100">
      <div className="pt-24">
        <div className="flex flex-wrap flex-col md:flex-row items-center justify-center bg-gray-100 p-6">
          <div className="flex flex-col w-full md:w-1/2 justify-center items-center text-center md:text-left">
            <h1
              className="my-4 text-4xl sm:text-5xl text-gray-700 leading-tight md:leading-none"
              style={{ lineHeight: "3.5rem" }}
            >
              Trying to figure out the right tactics for your startup?
            </h1>
            <h1 className="text-xl sm:text-3xl mb-8 text-gray-700 font-thin self-center md:self-start">
              Then you are at the right place.
            </h1>
            <button className="mx-auto lg:mx-0 hover:bg-gray-500 hover:text-white bg-blue-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out self-center sm:self-start">
              Signup Now!
            </button>
          </div>
          <div className="w-full md:w-1/2 py-6 text-center">
            <img className="w-full md:w-4/5 z-50 " src={logo} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
