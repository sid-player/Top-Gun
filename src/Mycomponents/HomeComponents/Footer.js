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
                <a
                  className="text-gray-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                  href="/#"
                >
                  TOP<span className="text-indigo-500">GUN</span>
                </a>
              </div>
              <div className="flex-1 ">
                <p className="uppercase text-white md:mb-6">Links</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/#"
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/#"
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Help
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/#"
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="uppercase text-white md:mb-6">Legal</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/#"
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Terms
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/#"
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1 ">
                <p className="uppercase text-white md:mb-6">Social</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/#"
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Facebook
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/#"
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/#"
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="uppercase text-white md:mb-6">Company</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/#"
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Official Blog
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/#"
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                      href="/#"
                      className="no-underline hover:underline text-gray-500 hover:text-pink-500"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a
            href="https://www.freepik.com/free-photos-vectors/background"
            className="text-gray-500"
          >
          </a>
        </footer>
      </div>
    );
  } 

export default Footer
