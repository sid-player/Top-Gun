import React from "react";
import logo from "./img/hero.png";
import "../../index.css";

export default function Hero() {
  return (
    <div className="bg-gray-100">
      <div className="pt-24">
        <div className="flex flex-wrap flex-col md:flex-row items-center justify-center bg-gray-100 p-6">
          <div className="flex flex-col items-center md:items-start justify-center flex-wrap w-full md:w-1/2">
            <div className="anim-container block items-center justify-center md:justify-start text-gray-700 text-center md:text-left">
              <span>
                We see what the VC's don't
                <div className="flip float-center relative top-4 bottom-0 left-2">
                  <div>
                    <div>😉</div>
                  </div>
                  <div>
                    <div>❤</div>
                  </div>
                  <div>
                    <div>💪</div>
                  </div>
                </div>
              </span>
            </div>
            <button className="lg:mx-0 hover:bg-gray-500 hover:text-white bg-blue-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out self-center sm:self-start">
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
