import React from "react";
let style = {
  background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
};

export default function Footer() {
  return (
    <div style={style}>
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-black">
              <button className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" >
                <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005" >
                  <rect fill="/#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                  <path className="plane-take-off" d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z " />
                </svg>
                LANDING
              </button>
            </div>
            <div className="flex-1 ">
              <p className="uppercase text-gray-500 md:mb-6">
                Links
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <button className="no-underline hover:underline text-gray-800 hover:text-pink-500" >
                    FAQ
                  </button>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <button className="no-underline hover:underline text-gray-800 hover:text-pink-500" >
                    Help
                  </button>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <button className="no-underline hover:underline text-gray-800 hover:text-pink-500" >
                    Support
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">
                Legal
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <button className="no-underline hover:underline text-gray-800 hover:text-pink-500" >
                    Terms
                  </button>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <button className="no-underline hover:underline text-gray-800 hover:text-pink-500" >
                    Privacy
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex-1 ">
              <p className="uppercase text-gray-500 md:mb-6">
                Social
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <button className="no-underline hover:underline text-gray-800 hover:text-pink-500" >
                    Facebook
                  </button>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <button className="no-underline hover:underline text-gray-800 hover:text-pink-500" >
                    Linkedin
                  </button>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <button className="no-underline hover:underline text-gray-800 hover:text-pink-500" >
                    Twitter
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">
                Company
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <button className="no-underline hover:underline text-gray-800 hover:text-pink-500" >
                    Official Blog
                  </button>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <button className="no-underline hover:underline text-gray-800 hover:text-pink-500" >
                    About Us
                  </button>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <button className="no-underline hover:underline text-gray-800 hover:text-pink-500" >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
