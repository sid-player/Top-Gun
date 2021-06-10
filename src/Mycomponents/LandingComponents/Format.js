import React, { useState } from 'react'

function Url({object}){
    return (
        <>
            <a href={object.url} rel="noreferrer" target="_blank" className="text-blue-800 pl-8 block text-left overflow-ellipsis">{object.name}</a>
        </>
    );
}

function Format({object}) {

    const [visibility,setVisbility] = useState(true);

    if(object.type==="folder")
    {
        const formatted = object.children.map((obj)=><Format key={obj.id} object={obj}/>);
        return (
            <div className="pl-8">
                <button onClick={(e)=>setVisbility((prev)=>!prev)} className="font-bold w-full text-left">{object.name}</button>
                <div className={visibility?"":"hidden"}>{formatted}</div>
            </div>
        );
    }
    else return <Url object={object}/>;
}

export default Format;