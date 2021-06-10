import React from 'react'
// import logo4 from './Logo4.png'
import logo6 from './Logo6.png'

const Team = () => {
    // let style = {
    //     background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
    // };
    
    return (
        <section className="items-center justify-center h-screen w-screen pt-12">
        <div className="container flex justify-center mx-auto pt-12">
            <div>
                <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
                <h1 className="xl:text-4xl text-3xl text-center text-gray-800  pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
            </div>
        </div>
        
        <div className="w-full px-10">
            <div className="container mx-auto">
                <div className="lg:flex md:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around pt-4">
                    <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
                        <div className="bg-top bg-cover bg-no-repeat h-68 w-68">
                            <img src={logo6} alt="img" className="h-full w-full overflow-hidden object-cover rounded shadow" />
                        </div>
                        
                        <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-16 right-0 left-0">
                            <p className="text-xl text-center text-gray-800 font-normal mb-1">
Dharamveer Singh Chouhan 
</p>
                            <p className="text-center text-base text-gray-600">CEO, Zostel</p>
                        </div>
                    </div>
                    <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs  mb-20 xl:max-w-sm lg:w-1/2 relative">
                        <div className="bg-top bg-cover bg-no-repeat h-68">
                            <img src={logo6} alt="img" className="h-full w-full overflow-hidden object-cover rounded shadow" />
                        </div>
                        <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                            <p className="text-xl text-center text-gray-800 font-normal mb-1">Parth Choudhary</p>
                            <p className="text-center text-base text-gray-600">CEO, ggTV Inc</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Team
