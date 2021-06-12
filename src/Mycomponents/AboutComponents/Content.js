import React from 'react'
import AboutBg from './img/p5.jpg'

function Content() {
    return (
        <div className="m-24 p-10 bg-gray-300 mb-10" style={{ backgroundImage: `url(${AboutBg})` }}>
             <h1 className="
                w-full
                my-2
                text-5xl
                font-bold
                leading-tight
                text-center text-gray-800
              ">
            About Us
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
            <div className="bg-white hover:grow 
            hover:shadow-xl my-14 mx-auto w-3/4 text-xl text-black font-semibold text-center rounded-xl px-8 py-6">
                <p>TopGun.VC builds entrepreneur’s faith in their vision and nurtures them with direction for the long war ahead.
            </p>
                <p>We believe companies are an outcome of the vision, character and determination of their founders. We believe
                billion-dollar companies can be built in any market, in any geography over the next decade. So, it’s the entrepreneur
                who wants to make it that matters. And we love to work with the most brutal grinders out there, and there are few joys
            other than vicariously winning against odds.</p>
                <p className="mt-2">We are founders ourselves and work part-time to help as many entrepreneurs as possible on their mission forward.
            We love equity and make sure we are participating for the long game ahead. If you would like to work with us, let us know.</p>
                <div className="mt-10 outline">Thanks <p className="font-bold underline">Dharamveer &amp; Parth</p></div>
            </div>
        </div>
    )
}

export default Content
