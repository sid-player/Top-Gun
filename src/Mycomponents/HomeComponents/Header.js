import React from 'react'

function Header() {
    return (
        <header class="w-full container mx-auto p-12">
            <div class="flex flex-col items-center py-12">
                <a class="font-bold text-gray-800 uppercase hover:text-gray-700 md:text-5xl " href="/">
                    Minimal Blog
            </a>
                <p class="text-lg text-gray-600">
                    Lorem Ipsum Dolor Sit Amet
            </p>
            </div>
        </header>

    )
}

export default Header
