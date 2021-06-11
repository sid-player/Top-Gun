import React from 'react'

function AboutNav() {
    return (
        <div className="fixed top-0">
            <nav className='flex fixed w-screen top-0 text-center h-16 bg-white text-black shadow-md'
                role='navigation'>
                <button className='pl-8 text-3xl font-bold mx-auto'>
                    TOP<span className="text-indigo-500">GUN</span>
                </button>
            </nav>
        </div>
    )
}

export default AboutNav
