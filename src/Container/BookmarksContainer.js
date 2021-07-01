import React from "react";
import Header from "../Mycomponents/LandingComponents/Header";
import Search from "../Mycomponents/BookmarkComponents/SearchBar";

function BookmarksContainer() {
  return (
    <>
      <Header />
      <div className="pt-20 min-h-screen bg-gray-50">
        <Search />
        <div style={{ height: "65vh" }}></div>
      </div>
    </>
  );
}

export default BookmarksContainer;
