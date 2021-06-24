import data from "../../BookmarkData";
import {useState, useEffect} from "react";

function Search()
{
    const [SearchResults, setSearchResults] = useState(data)
    const [listToDisplay, setListToDisplay] = useState(null)

    useEffect(()=>{
        setListToDisplay(SearchResults.map( object => 
        // <div className= "grid grid-flow-col grid-cols-3">
    //    iterating over data
       <div>
            <a href={object.url} target="_blank" rel="noreferrer" className=" mt-3  justify-center text-sm md:text-l text-gray-700">
                <div className=" mt-4 justify-center overflow-hidden shadow transform hover:scale-105 hover:mb-2 hover:bg-gray-100  bg-gray-50   break-words   border-b-2 rounded p-4 md:p-8 my-1 font-medium  "
              key={object.id}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 mr-3 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg> */}
                {/* for dummy image */}
                {
                    object.image.length !==0 ?
                   <img src={object.image} alt="" className="w-full h-40 object-contain  justify-center"/>
                    :
                   <img src="https://picsum.photos/id/1/180" alt="" className="h-40
                    object-contain justify-center"/>
                }

               <div className= " truncate">
               {object.name}
               </div>
               
                </div>
            </a>
        </div>
        ))
    }, [SearchResults])
    
    function onChangeHandler(value)
    {
        if(value===""){
            setSearchResults(data);
            return;
        }
        const searchArray = value.toLowerCase().split(" ").filter(word=>word.length>0);
        let scoreArray = []
        data.forEach( object => {
            let score=0;
            let nameArray = object.name.toLowerCase().split(" ").filter(word=>word.length>0)
            searchArray.forEach( word => {
                if(object.name.toLowerCase().includes(word))score+=5;
                if(object.url.toLowerCase().includes(word))score++;
                if(nameArray.includes(word))score+=5;
            });
            if(score)scoreArray.push([score,object]);
        })
        if(scoreArray.length){
            scoreArray.sort((a,b)=>b[0]-a[0]);
            let tempSearchResults = []
            scoreArray.forEach( pair => tempSearchResults.push( pair[1] ));
            setSearchResults( tempSearchResults )
        }
        else{
            setListToDisplay(<div className="bg-white rounded p-5 my-5  ">No Match Found</div>);
        }
    }
    
    return (

        // search bar
    <div className="Search my-4 w-screen flex flex-col items-center justify-center">
        <div className=" border-2 border-gray-200 shadow-md w-4/5 md:w-2/3 relative  bg-gray-100 rounded-lg flex">
            <input className="w-full rounded-full bg-gray-100 p-4  h-16 placeholder-gray-900" type="text" placeholder="Search Anything..." onChange={e=>onChangeHandler(e.target.value)}/>
             
        </div>

        
        
        

        {/* content */}
           
        <div className="relative mt-0  overflow-hidden grid gap-6 sm:grid-cols-1 w-1/2 h-1/2  md:w-2/3 grid-cols-3 lg:grid-cols-4">
            {listToDisplay}
        </div>

    </div>
    );
}

export default Search;