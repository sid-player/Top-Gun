import data from "../../BookmarkData";
import {useState} from "react";

function Search()
{
    const [display, setDisplay] = useState(null)
    
    function onChangeHandler(value)
    {
        if(value===""){setDisplay(null); return;}
        let array=[]
        const searchArray = value.toLowerCase().split(" ").filter(word=>word.length>0);

        // search function declaration
        function search(object)
        {
            if(object.type==="folder")
            {
                object.children.forEach(element => search(element));
            }
            else
            {
                let score=0;
                let nameArray = object.name.toLowerCase().split(" ").filter(word=>word.length>0)
                searchArray.forEach( word => {
                    if(object.name.toLowerCase().includes(word))score+=5;
                    if(object.url.toLowerCase().includes(word))score++;
                    if(nameArray.includes(word))score+=5;
                });
                if(score)array.push([score,object]);
            }
        }
        // search function call (gives array of matched objects with there scores)
        search(data);
        if(array.length===0){setDisplay(<p className="p-2">No match Found</p>);}
        else
        {
            array.sort((a,b)=>b[0]-a[0]);
            let tempDisplay = array.map(item=>
            <div key={item[1].id} className="my-2 h-6 broder-4 overflow-hidden">
                <a className="link w-full ml-1 mr-2 my-2 hover:text-blue-700 text-black-400" rel="noreferrer" target="_blank" href={item[1].url}> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {item[1].name}
                </a>
            </div>
            );
            setDisplay(tempDisplay);
        }
    }
    
    return (
    <div className="Search my-4 w-screen flex flex-col items-center">
        <div className="shadow-md bg-white w-4/5 relative rounded-md flex">
            <input className="w-full rounded-full p-2" type="text" placeholder="Search..." onChange={event=> {onChangeHandler(event.target.value)}} />
            <button className="rounded-full absolute right-0 flex justify-end items-center text-black-500 p-2 hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>
        <div className="relative w-4/5">
            <div className="absolute bg-white rounded-md w-full top-1">{display}</div>
        </div>
    </div>
    );
}

export default Search;
