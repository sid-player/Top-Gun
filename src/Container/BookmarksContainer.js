import React from 'react'
// import data from '.././BookmarkData';
import Header from "../Mycomponents/LandingComponents/Header";
import Search from "../Mycomponents/LandingComponents/SearchBar";

function BookmarksContainer() {

   
    
    return (
        <>
            <Header/>
            <div className="pt-20 min-h-screen bg-gray-300">
                <Search />
                <div style={{height : "65vh"}}></div>
            </div>
        </>
    );
}

export default BookmarksContainer;
