import React from 'react'

function BottomSection() {
    return (
        <div className="grid grid-cols-3 h-64 mx-auto ml-40 p-6 my-12">
            <div className="md:w-1/3 xl:w-1/4 ">
                <a href="/">
                    <img alt="img" className="hover:grow hover:shadow-lg h-64 max-w-lg" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" />


                </a>
            </div>

            <div className=" md:w-1/3 xl:w-1/4">
                <a href="/">
                    <img alt="img" className="hover:grow hover:shadow-lg h-64 max-w-lg" src="https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" />
                </a>
            </div>

            <div className="md:w-1/3 xl:w-1/4">
                <a href="/">
                    <img alt="img" className="hover:grow hover:shadow-lg h-64 max-w-lg" src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" />

                </a>
            </div>
        </div>
    )
}

export default BottomSection
