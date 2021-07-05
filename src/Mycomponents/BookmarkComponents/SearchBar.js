import data from "../../BookmarkData";
import { useState, useEffect } from "react";

function Search() {
  const [Search, setSearch] = useState("");
  const [SearchResults, setSearchResults] = useState(data);
  const [listToDisplay, setListToDisplay] = useState(null);
  const [tag, setTag] = useState("");
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("render");

    return setListToDisplay(SearchResults.map((object) => cardDisplay(object)));
  }, [SearchResults, flag]);

  function exactSearch(event) {
    const searchItem = event.target.value;
    setSearch(searchItem);
  }

  function tagShow(e) {
    setFlag(true);
    //console.log(data.filter(obj=>obj.Tag=='temp'))
    const tag_data = data.filter((obj) => obj.Tag === e.target.value);
    setTag(tag_data);
  }
  function cardDisplay(object) {
    return (
      <div className="break-inside p-6 my-4 transition hover:shadow-lg border-2 border-gray-300 rounded-lg bg-gray-50">
        <div
          className=" mt-4 justify-center overflow-hidden transform transition hover:scale-105 hover:mb-2 
                 break-words p-6 md:p-8 my-1  "
          key={object.id}
        >
          {/* for dummy image */}
          {object.image.length !== 0 ? (
            <img src={object.image} alt="" className="object-contain mx-auto" />
          ) : (
            <img
              src="https://via.placeholder.com/150?text=TopGun.vc"
              alt={object.name}
              className="object-contain mx-auto"
            />
          )}

          <div className="text-center text-lg mt-4">{object.name}</div>
          <div className="flex flex-col items-center justify-center px-2 py-3">
            <a href={object.url} target="_blank" rel="noreferrer">
              <div className="bg-green-500 py-2 px-3 text-white m-2 transition hover:bg-green-600 font-bold">
                Visit Site
              </div>
            </a>
            <div className="capitalize w-auto border-2 rounded-xl text-center bg-gray-200 text-gray-900 mt-2 px-2 text-sm">
              {object.Tag}
            </div>
          </div>
        </div>
      </div>
    );
  }
  function onChangeHandler() {
    setFlag(false);
    const value = Search;
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
      <div className=" border-2 border-gray-200 shadow-sm md:shadow-md w-4/5 md:w-2/3 relative  bg-gray-100 rounded-lg flex">
        {/* <SearchIcon> */}
        <input
          className="w-full rounded-full bg-gray-100 p-2  h-12  placeholder-gray-900"
          type="text"
          placeholder="Type and press enter to search..."
          onChange={exactSearch}
          value={Search}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onChangeHandler();
            }
          }}
        />
        <button
          onClick={onChangeHandler}
          className="m-1 rounded-lg bg-green-500 px-4 text-gray-100 hover:bg-green-600"
        >
          Search
        </button>
      </div>

      <div className="my-3 flex flex-wrap -m-1 w-3/4 md:w-2/3">
        <div className="m-1 rounded-full px-2 leading-loose outline-none  block">
          Topics-
        </div>
        <button
          className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer outline-none"
          onClick={tagShow}
          value="temp"
        >
          Temp
        </button>
        <button
          className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer outline-none"
          onClick={tagShow}
          value="Miscelleneous"
        >
          Miscelleneous
        </button>
      </div>

      {/* content */}

      <div className="masonry before:box-inherit after:box-inherit w-full px-2">
        {flag ? tag.map((objetc) => cardDisplay(objetc)) : listToDisplay}
      </div>
    </div>
  );
}

export default Search;
