import data from "../../BookmarkData";
import {useState, useEffect} from "react";

function Search()
{
    const [SearchResults, setSearchResults] = useState(data)
    const [listToDisplay, setListToDisplay] = useState(null)

    useEffect(()=>{
        setListToDisplay(SearchResults.map( object => 
        <div
        className="shadow bg-white rounded p-5 my-5"
        key={object.id}>
            <a href={object.url} target="_blank" rel="noreferrer" className="hover:text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 mr-3 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                {object.name}
            </a>
        </div>))
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
    <div className="Search my-10 w-screen flex flex-col items-center">
        <div className="shadow-md bg-white w-4/5 relative rounded-md flex">
            <input className="w-full rounded-full p-2" type="text" placeholder="Search..." onChange={e=>onChangeHandler(e.target.value)}/>
            <button className="rounded-full absolute right-0 flex justify-end items-center text-black-500 p-2 hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>
        <div className="relative mt-5 w-4/5">
            {listToDisplay}
        </div>
    </div>
    );
}

export default Search;
