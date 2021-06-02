import React from 'react'

function LoadingScreen() {

    let style = {
        background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
    };

    const loading = {
        borderWidth: "2px",
        borderRightColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftColor: "transparent",
    }
    
    return (
        <div className="h-screen w-screen flex items-center justify-center" style={style}>
            <p className="text-white">Loading </p>
            <div style={loading} className="h-4 w-4 animate-spin m-2 rounded-2xl border-solid"></div>
        </div>
    )
}

export default LoadingScreen
