import React from 'react'

let style = {
    background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
  };
  
function Footer() {
    return (
      <div style={style}>
        <footer className="bg-black">
          <div className="container mx-auto px-8">
            <div className="w-full flex flex-col md:flex-row py-6">
              <div className="flex-1 mb-6 text-black">
                <button
                  className="text-gray-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                 
                >
                  TOP<span className="text-indigo-500">GUN</span>
                </button>
              </div>
              <div className="flex-1 ">
                <p className="uppercase text-white md:mb-6">Links</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <button
                     
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      FAQ
                    </button>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <button
                     
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Help
                    </button>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <button
                     
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Support
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="uppercase text-white md:mb-6">Legal</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <button
                     
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Terms
                    </button>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <button
                     
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Privacy
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex-1 ">
                <p className="uppercase text-white md:mb-6">Social</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <button
                     
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Facebook
                    </button>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <button
                     
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Linkedin
                    </button>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <button
                     
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Twitter
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="uppercase text-white md:mb-6">Company</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <button
                     
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Official Blog
                    </button>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <button
                     
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      About Us
                    </button>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <button
                     
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button
            className="text-gray-500"
          >
          </button>
        </footer>
      </div>
    );
  } 

export default Footer
