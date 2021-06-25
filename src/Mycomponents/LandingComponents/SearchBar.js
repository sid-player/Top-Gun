import data from "../../BookmarkData";
import { useState, useEffect } from "react";
import searchIcon from "../../assets/search.svg";

function Search() {
  const [SearchResults, setSearchResults] = useState(data);
  const [listToDisplay, setListToDisplay] = useState(null);

  useEffect(() => {
    setListToDisplay(
      SearchResults.map((object) => (
        <div>
          <a
            href={object.url}
            target="_blank"
            rel="noreferrer"
            className=" mt-3  justify-center text-sm md:text-l text-gray-700"
          >
            <div
              className="mt-4 justify-center overflow-hidden  transition transform hover:scale-105 hover:mb-2 
              hover:bg-gray-50 hover:shadow-md bg-gray-50 break-words border-b-2 border-gray-300 rounded p-4 md:p-8 my-1 font-medium"
              key={object.id}
            >
              {/* for dummy image */}
              {object.image.length !== 0 ? (
                <img
                  src={object.image}
                  alt=""
                  className="w-full h-40 object-contain justify-center"
                />
              ) : (
                <img
                  src="https://picsum.photos/id/1/180"
                  alt=""
                  className="h-40
                    object-contain justify-center"
                />
              )}

              <div className="truncate">{object.name}</div>
            </div>
          </a>
        </div>
      ))
    );
  }, [SearchResults]);

  function onChangeHandler(value) {
    if (value === "") {
      setSearchResults(data);
      return;
    }
    const searchArray = value
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 0);
    let scoreArray = [];
    data.forEach((object) => {
      let score = 0;
      let nameArray = object.name
        .toLowerCase()
        .split(" ")
        .filter((word) => word.length > 0);
      searchArray.forEach((word) => {
        if (object.name.toLowerCase().includes(word)) score += 5;
        if (object.url.toLowerCase().includes(word)) score++;
        if (nameArray.includes(word)) score += 5;
      });
      if (score) scoreArray.push([score, object]);
    });
    if (scoreArray.length) {
      scoreArray.sort((a, b) => b[0] - a[0]);
      let tempSearchResults = [];
      scoreArray.forEach((pair) => tempSearchResults.push(pair[1]));
      setSearchResults(tempSearchResults);
    } else {
      setListToDisplay(
        <div className="bg-white rounded p-5 my-5  ">No Match Found</div>
      );
    }
  }

  return (
    // search bar
    <div className="Search my-4 flex flex-col items-center justify-center">
      <div className="border-1 border-gray-100 shadow w-4/5 md:w-2/3 relative flex my-2">
        <span className="flex items-center justify-center bg-white pl-4 z-20">
          <img src={searchIcon} alt="search icon" style={{ height: "2vh" }} />
        </span>
        <input
          className="bg-white appearance-none border-2 border-white  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-md z-0"
          type="text"
          placeholder="Search Anything..."
          onChange={(e) => onChangeHandler(e.target.value)}
        />
      </div>

      {/* content */}

      <div className="relative mt-0  overflow-hidden grid gap-6 sm:grid-cols-1 w-3/4 h-1/2  md:w-2/3 grid-cols-2 lg:grid-cols-4">
        {listToDisplay}
      </div>
    </div>
  );
}

export default Search;
