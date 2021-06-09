import data from "../../BookmarkData";
import {useState} from "react";

function Search()
{
    const[searchTerm,setSearchTerm] = useState('')

    function search(data,searchTerm,arr=[])
    {
        if(data.type==="folder")
        {
            data.children.forEach(element => search(element,searchTerm,arr));
        }
        else
        {
            if( data.name.toLowerCase().includes(searchTerm) || data.url.toLowerCase().includes(searchTerm) )
            arr.push(data)
        }
    }
    
    return (
    <div className="Search m-4">
    <input className="w-full" type="text" placeholder="Search..." onChange={event=> {setSearchTerm(event.target.value)}} />
            {/* { data.filter( (val) => {
        if(searchTerm == "")
        return val
        else if (val.name.toLowerCase().includes(searchTerm.toLowerCase() ))
        {
            return val
        }
        }).map((val,key) => {
                        return (
                        <div className="User" key={key}>
                            <p>{val.url}</p>
                            </div>
                        );
            })} */}
    </div>
    );
}

export default Search;