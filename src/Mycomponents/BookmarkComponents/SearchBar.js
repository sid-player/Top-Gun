import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loader/Loading"

function Search() {
  const [Search, setSearch] = useState("");
  const [data1, setdata] = useState();
  const [SearchResults, setSearchResults] = useState();
  const [showalltags, setshowalltags] = useState();
  const [displayalltags, setdisplayalltags] = useState();
  const [listToDisplay, setListToDisplay] = useState(null);
  const [tag, setTag] = useState();
  const [flag, setFlag] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [showtagsection, setshowtagsection] = useState(false)


  const url = "https://topgun-test1.herokuapp.com/api/bookmarks/?format=json";
  const url2 = "https://topgun-test1.herokuapp.com/api/tags/?format=json";

  const getDataFromApi = async () => {
    setisloading(true)
    await axios.get(url).then((res) => {
      setdata(res.data);
      setisloading(false);
      // console.log(res.data);
      setSearchResults(res.data);
    });
  };
  const getTagsFromApi = async () => {

    axios.get(url2).then((res) => {
      setshowalltags(res.data);

      // console.log(res.data);
    });
  };
  useEffect(() => {
    getDataFromApi();
    getTagsFromApi();
  }, []);

  console.log("data1", data1);

  useEffect(() => {
    if (typeof showalltags !== "undefined") {
      setdisplayalltags(
        showalltags.map((obj) => (
          <button
            className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer outline-none"
            key={obj.id}
            onClick={tagShow}
            value={obj.tags}
          >
            {obj.tags}
          </button>
        ))
      );
    }
  }, [data1]);

  function fun(array) {
    var items = [];
    for (var i = 0; i < array.length; i++) {
      items.push(
        <span className="capitalize inline-block w-auto border-2 rounded-xl text-center bg-gray-200 text-gray-900 mt-2 mr-2 px-2 text-sm">
          {array[i]}
        </span>
      );
    }
    return items;
  }

  useEffect(() => {
    // console.log("render");

    if (typeof SearchResults === "undefined") {
    } else {
      return setListToDisplay(
        SearchResults.map((object) => cardDisplay(object))
      );
    }
  }, [SearchResults, flag]);

  function exactSearch(event) {
    const searchItem = event.target.value;
    setSearch(searchItem);
  }

  function cardDisplay(object) {
    return (


      <div className="break-inside">
        <a href={object.url} target="_blank" rel="noreferrer">
          <div
            className=" mt-0 mb-4 mx-1 justify-center overflow-hidden transform transition hover:scale-105 bg-white
                 break-words p-6 md:p-0 my-0 border-2 border-gray-300 rounded-md"  key={object.id}
          >
            {/* for dummy image */}
            {object.image.length !== 0 ? (
              <img src={object.image} alt="" className="object-contain mx-auto w-full" />
            ) : (
              <img
                src="https://via.placeholder.com/150?text=TopGun.vc"
                alt={object.name}
                className="object-contain mx-auto mt-2 bg-white"
              />
            )}

            <div className="text-center bg-white text-lg mt-0 ">
              <div className=" p-4 shadow-md">
                {object.name}
              </div>
              <div className="flex bg-gray-100  flex-col items-center justify-center px-0 py-0">


                <div className=" pb-2">
                  {fun(object.tags)}
                </div>

              </div>



            </div>
          </div>
        </a>
      </div>

    );
  }

  function tagShow(e) {
    setshowtagsection(false) 
    
    e.preventDefault();
    setFlag(true);
   
    console.log("Data1 type=", typeof data1);
    if (typeof data1 !== "undefined") {
      const tag_data = data1.filter((obj) => {
        if (obj.tags.includes(e.target.value)) {
          return obj;
        }
      });
      setTag(tag_data);
    }
  }

  function onChangeHandler() {
    setFlag(false);
    const value = Search;
    if (value === "") {
      setSearchResults(data1);
      return;
    }

    const searchArray = value
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 0);
    let scoreArray = [];

    if (typeof SearchResults !== "undefined") {
      data1.forEach((object) => {
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
    }

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
    <div className="Search -mt-1 mb-10 overflow-visible  flex flex-col  items-center justify-center">

      <div className="w-screen">
        <button
          className="m-1 ml-4 px-4 mt-4  bg-gray-200 hover:bg-gray-300 rounded-full  font-bold text-xl leading-loose cursor-pointer outline-noneflex float-left items-end"
          onClick={()=>setshowtagsection(!showtagsection)}
        >
        
        <div>
          
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg> 
          Topics
          
          
        </button>
        

        <div>
          <div className=" border-2 mt-2 border-gray-200 shadow-sm md:shadow-md w-80 md:w-4/5   bg-gray-100 rounded-full flex">

            
            <input
              className=" placeho w-full rounded-full bg-gray-100 p-2  h-12  placeholder-gray-900"
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
              className="m-1 mr-5 rounded-lg bg-green-500 px-4 text-gray-100 hover:bg-green-600"
            >
              Search
            </button>
          </div>
          
        </div>
        {console.log(showtagsection)}
        {
          showtagsection?(
            <div className=" z-0 bg-gray-100 p-5 px-10 m-4 h-48 w-full overflow-scroll">
            {
            isloading?<Loading/>:(
              
             <div className=" ">
               {displayalltags}
             </div>
            
      
             
            
            )
          }
            </div>
          ):""
        }
        

        

      </div>





      {/* <div className=" border-2 mt-2 border-gray-200 shadow-sm md:shadow-md w-80 md:w-2/3   bg-gray-100 rounded-lg flex">
      Hello
        
        <input
          className=" placeho w-full rounded-full bg-gray-100 p-2  h-12  placeholder-gray-900"
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
      </div> */}
      {/* {
        isloading?"":(
          <div className="my-3  flex flex-wrap -m-1 w-3/4 md:w-2/3">
          <div className="m-1 text-xl block rounded-full px-2 leading-loose outline-none ">
            Topics-
          </div>
         <div className=" ">
           {displayalltags}
         </div>
        
  
         
        </div>
        )
      } */}


      {/* content */}

      {
        isloading?<Loading/>:(

          <div className="masonry coloumn overflow-visible before:box-inherit after:box-inherit w-full mt-4   md:px-4">
        
          {
            isloading?<Loading/>:tag ? tag.map((objetc) => cardDisplay(objetc)) : listToDisplay
          }
          
        </div>

        )
      }


    </div>
  );
}

export default Search;
