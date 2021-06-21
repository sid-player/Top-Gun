import React from 'react'


function Content() {
    return (
        <div className="mt-12 md:mt-24 flex flex-col items-center  h-screen bg-white">
            <h1 className="w-full mt-10 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800">
                About Us
            </h1>
            <div className="bg-white hover:grow shadow-xl my-6 md:my-8 mx-3 lg:mx-auto w-full md:w-4/5 lg:w-3/5 text-md md:text-xl
             text-black font-semibold text-left rounded-md px-8 py-6">
                <p>
                    TopGun.VC builds entrepreneur’s faith in their vision and nurtures them with direction for the long war ahead.
                </p>
                <p>
                    We believe companies are an outcome of the vision, character and determination of their founders. We believe
                    billion-dollar companies can be built in any market, in any geography over the next decade. So, it’s the entrepreneur
                    who wants to make it that matters. And we love to work with the most brutal grinders out there, and there are few joys
                    other than vicariously winning against odds.
                </p>
                <p className="mt-2">
                    We are founders ourselves and work part-time to help as many entrepreneurs as possible on their mission forward.
                    We love equity and make sure we are participating for the long game ahead. If you would like to work with us, let us know.
                </p>
                <div className="mt-10 outline">
                    Thanks 
                    <p className="font-bold underline">
                        Dharamveer &amp; Parth
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Content
