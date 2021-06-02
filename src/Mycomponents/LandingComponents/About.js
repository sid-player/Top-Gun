import React from 'react'

const About = () => {

    let style = {
        background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
    };
    
    return (
        <section className="flex items-center justify-center h-screen w-screen" style={style}>
            <h1 className='text-center mt-20 font-bold'>About Page</h1>
        </section>
    )
}

export default About

