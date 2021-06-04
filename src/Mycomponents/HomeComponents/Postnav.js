import React from 'react'

function Postnav() {
    return (
        <nav className="w-full py-4 border-t border-b bg-gray-100">
            <div className= 'w-full flex-grow sm:flex sm:items-center sm:w-auto'>
                <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                    <button className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Technology</button>
                    <button className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Automotive</button>
                    <button className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Finance</button>
                    <button className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Politics</button>
                    <button className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Culture</button>
                    <button className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</button>
                </div>
            </div>
        </nav >
    )
}

export default Postnav
