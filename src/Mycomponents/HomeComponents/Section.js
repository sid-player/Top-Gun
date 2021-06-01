import React from 'react'

import background from "./img/BlankMap.png";
import laptop from "./img/images.jpg";
import stadium from "./img/stadium.jpg";
import download from "./img/f.png";

function Section() {
    return (
        <div >
            <section className="w-full md:w-full flex flex-col px-3">

                <article className="flex flex-col" style={{ backgroundImage: `url(${background})` }}>
                    <div className="grid grid-cols-2 space-x-1">
                        <div className="m-24 p-10">
                            <img className=" w-full h-auto object-cover object-center" src={laptop} alt="img" />
                        </div>
                        <div className="m-24 p-10">
                            <h1 className="text-black font-bold text-4xl uppercase tracking-wider">Passport</h1><span className="">by Topgun</span>
                            <div><p className="text-xl">
                                Passport is the world’s most comprehensive online innovation platform, connecting
                                entrepreneurs and emerging startups to key networks, essential tools and resources,
                                  and savings on world-class servic</p></div>
                            <div className="mt-4 sm:mt-6 space-x-4">
                                <a className="inline-block px-5 py-3 hover:bg-white hover:text-black hover:-translate-y-0.5 focus:ring-blue-500 focus:ring-opacity-50 
                                focus:outline-none focus:ring focus:ring-offset-2 active:bg-blue-600 bg-blue-400 text-white uppercase tracking-wider font-semibold text-sm 
                                text-white shadow-lg sm:text-base" href="/">
                                    Discover passport
                                </a>
                                <a className="inline-block px-5 py-3 hover:bg-blue-400 hover:text-white hover:-translate-y-0.5 focus:ring-blue-500 focus:ring-opacity-50 
                                focus:outline-none focus:ring focus:ring-offset-2 active:bg-blue-600 bg-white text-black uppercase tracking-wider font-semibold text-sm 
                                 shadow-lg sm:text-base border-gray" href="/">
                                    Discover passport
                                </a>
                            </div>
        
                        </div>
                    </div>

                </article>

                <article className="flex flex-col" style={{ backgroundImage: `url(${stadium})` }}>
                <div className="grid grid-cols-2 space-x-1 p-10">
                        <div className="m-24 p-20 space-y-6 px-10">
                            <h1 className="text-white text-2xl font-bold uppercase">OneValley Pitch Events</h1>
                            <h2 className="text-white text-xl font-semibold">Highlighting the most promising startups from around the world</h2>
                            <ul className=" uppercase text-white space-y-6 font-semibold text-md">
                                <li><a href="/">Pittsburgh Startup Challenge</a></li>
                                <li><a href="/">The future of robotics</a></li>
                                <li><a href="/">Female founders seed</a></li>
                                <li><a href="/">Spotlight on female founders</a></li>
                            </ul>
                        </div>
                        <div className="m-24 p-20 px-10 space-y-4">
                            <h1 className="text-white font-bold text-4xl uppercase tracking-wider">Pittsburgh Startup Challenge</h1>
                            <span className="text-white text-lg font-semibold">Semi-Finals Part I</span>
                            <div><p className="text-md text-white">
                            A region-wide competition open to pre-seed and seed-stage entrepreneurs in any industry. Our goal is to 
                            identify and support the most exciting early-stage startups emerging across Pittsburgh <a href="/" className="hover:text-black underline">Join Here.</a></p></div>
                          
        
                        </div>
                    </div>

                </article>
                <article className="mx-auto flex flex-col" style={{ backgroundImage: `url(${download})` }}>
                <div className="container w-1/2 mx-auto">
                        
                        <div className="mx-auto p-24 space-y-6">
                            <h2 className="text-white font-bold text-4xl tracking-wider">Corporate Social Responsibility</h2>
                            <h1 className="text-black font-bold text-6xl tracking-wider">Empowering All Innovators</h1>
                              <div><p className="text-white text-xl">At OneValley, we are committed to fighting systemic inequality through democratizing and 
                                  decentralizing access to resources and support networks so that together we build an innovation 
                                  community with diversity, love, and action at its core.</p></div>
                            <div className="mt-4 sm:mt-6 space-x-4">
                                <a className="inline-block px-5 py-3 hover:bg-white hover:text-black hover:-translate-y-0.5 focus:ring-blue-500 focus:ring-opacity-50 
                                focus:outline-none focus:ring focus:ring-offset-2 active:bg-blue-600 bg-blue-400 text-white uppercase tracking-wider font-semibold text-sm 
                                text-white shadow-lg sm:text-base" href="/">
                                    Learn more
                                </a>
                                
                            </div>
        
                        </div>
                </div>

                </article>


            </section>
        </div>
    )
}

export default Section
