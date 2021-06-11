import React from 'react'

function Content() {
    return (
        <div className="">
            <div className="bg-gradient-to-r from-indigo-800 via-indigo-500 to-blue-600 text-white h-40 pt-24 mt-30 text-4xl 
            text-center text-bottom font-bold">About Us</div>
            <div className="shadow-inner transform border-2 border-indigo-600 hover:border-gray-200 hover:translate-x-2 hover:bg-gray-200 hover:grow 
            hover:shadow-xl my-14 mx-auto w-3/4 text-xl text-black text-center rounded-xl p-8">
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
