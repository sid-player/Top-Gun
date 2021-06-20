import React from 'react'

function LoadingScreen() {

    const loading = {
        borderWidth: "2px",
        borderRightColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftColor: "transparent",
    }
    
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
            <p className="text-gray-800">Loading </p>
            <div style={loading} className="h-4 w-4 animate-spin m-2 rounded-2xl border-solid"></div>
        </div>
    )
}

export default LoadingScreen
