import React from 'react'

function BottomSection() {
    return (
        <div className="grid grid-cols-3 h-64 ml-40 p-6 my-12">
            <div className="">
                <a href="/">
                    <img alt="img" className="hover:grow hover:shadow-lg h-64 max-w-lg" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" />


                </a>
            </div>

            <div className="">
                <a href="/">
                    <img alt="img" className="hover:grow hover:shadow-lg h-64 max-w-lg" src="https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" />
                </a>
            </div>

            <div className="">
                <a href="/">
                    <img alt="img" className="hover:grow hover:shadow-lg h-64 max-w-lg" src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" />

                </a>
            </div>
        </div>
    )
}

export default BottomSection
