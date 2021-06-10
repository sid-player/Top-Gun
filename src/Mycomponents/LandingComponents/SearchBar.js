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
        if(array.length===0){setDisplay(<p>No match Found</p>);}
        else
        {
            array.sort((a,b)=>b[0]-a[0]);
            let tempDisplay = array.map(item=>
            <a className="link block mx-2 text-blue-700" rel="noreferrer" target="_blank" href={item[1].url} key={item[1].id}>{item[1].name}</a>);
            setDisplay(tempDisplay);
        }
    }
    
    return (
    <div className="Search m-4">
        <input className="w-full p-2" type="text" placeholder="Search..." onChange={event=> {onChangeHandler(event.target.value)}} />
        <div className="relative">
            <div className="absolute bg-white w-full top-0">{display}</div>
        </div>
    </div>
    );
}

export default Search;