import React from 'react'
// import logo4 from './Logo4.png'
// import logo6 from './Logo6.png'
import DV from './DV.jpg'
import PC from './PC.jpg'
const Team = () => {
    // let style = {
    //     background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
    // };

    return (
        <section className="items-center justify-center w-screen mt-20 bg-gray-50">
            <div className="container flex justify-center mx-auto pt-4">
                <div>
                    <p className="text-gray-500 text-xl text-center font-normal ">
                        BUILDING TEAM
                    </p>
                    <h1 className="xl:text-3xl text-2xl mt-2 text-center text-gray-900  pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                </div>
            </div>

            <div className="w-screen md:w-2/3 px-10 py-8 md:mx-auto bg-gray-100 shadow-sm">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around pt-4">
                        <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
                           
                                <img src={DV} alt="img" className="h-80 w-64 overflow-hidden mx-auto object-cover rounded shadow" />
                            
                            <div className=" bg-white flex flex-col justify-center md:w-60 md:h-28 mx-auto absolute rounded shadow -mt-8 right-0 left-0 ">
                                <p className="text-lg md:text-xl text-center text-gray-800 font-medium mb-1">
                                    Dharamveer Singh Chouhan
                                </p>
                                <p className="text-center text-base font-medium text-gray-600">
                                    CEO, Zostel
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
                            
                                <img src={PC} alt="img" className="h-80 w-64 overflow-hidden mx-auto object-cover rounded shadow" />
                           
                            <div className=" bg-white flex flex-col justify-center md:w-60 md:h-28 mx-auto absolute rounded shadow -mt-8 right-0 left-0">
                                <p className="text-lg md:text-xl text-center text-gray-800 font-medium mb-1">
                                    Parth Choudhary
                                </p>
                                <p className="text-center text-base font-medium text-gray-600">
                                    CEO, ggTV Inc
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
