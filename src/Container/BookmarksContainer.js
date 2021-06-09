import React from 'react'
import data from '.././BookmarkData';
import Format from "../Mycomponents/LandingComponents/Format";
import Header from "../Mycomponents/LandingComponents/Header";
import Search from "../Mycomponents/LandingComponents/SearchBar";

function BookmarksContainer() {

    let style = {
        background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
    };
    
    return (
        <>
            <Header/>
            {/* <SearchBar/> */}
            <div className="pt-20 min-h-screen" style={style}>
                <Search/>
                <Format object={data}/>
            </div>
        </>
    );
}

export default BookmarksContainer;
