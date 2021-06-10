import React, { useState } from 'react'

function Url({object}){
    return (
        <div>
            <a href={object.url} rel="noreferrer" target="_blank" className="ml-5 hover:text-blue-900 text-left overflow-ellipsis">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 mr-2 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                {object.name}
            </a>
        </div>
    );
}

function Triangle({isOpen}) {
    const triangle = {
        margin:"9px",
        border: "4px solid transparent",
        borderLeftWidth: "6px",
        borderRightWidth: "0px",
        borderLeftColor: "black",
    }
    return (
        <div className={isOpen?"transform rotate-90":""} style={triangle} ></div>
    )
}


function Format({object}) {

    const [isOpen,setIsOpen] = useState(false);

    if(object.type==="folder")
    {
        const formatted = object.children.map((obj)=><Format key={obj.id} object={obj}/>);
        return (
            <div className="pl-4">
                <button onClick={(e)=>setIsOpen((prev)=>!prev)} className={`flex rounded-md font-medium w-full text-left  `}>
                    <Triangle isOpen={isOpen}/>
                    {object.name}
                </button>
                <div className={isOpen?"":"hidden"}>{formatted}</div>
            </div>
        );
    }
    else return <Url object={object}/>;
}

export default Format;



