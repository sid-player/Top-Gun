import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="w-full py-4 bg-white shadow fixed">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between">

                    <nav>
                        <ul className="flex text-2xl items-center justify-between font-bold text-sm text-black uppercase no-underline space-x-10">
                            <div className="text-black mx-24">TOP<span className="text-indigo-500">GUN</span></div>
                            <li><a className="hover:text-indigo-200 hover:underline px-4" href="/">Shop</a></li>
                            <li><a className="hover:text-indigo-200 hover:underline px-4" href="/">About</a></li>
                            <li><a className="hover:text-indigo-200 hover:underline px-4" href="/">Shop</a></li>
                            <li><a className="hover:text-indigo-200 hover:underline px-4" href="/">Shop</a></li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
