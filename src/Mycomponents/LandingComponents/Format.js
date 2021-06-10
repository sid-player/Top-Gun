import React, { useState } from 'react'

function Url({object}){
    return (
        <>
<<<<<<< Updated upstream
            <a href={object.url} rel="noreferrer" target="_blank" className=" pl-8 block text-left overflow-ellipsis">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg>
                 {object.name}</a>
=======
            <a href={object.url} rel="noreferrer" target="_blank" className="text-blue-800 pl-8 block text-left overflow-ellipsis">{object.name}</a>
>>>>>>> Stashed changes
        </>
    );
}

function Format({object}) {

    const [visibility,setVisbility] = useState(true);

    if(object.type==="folder")
    {
        const formatted = object.children.map((obj)=><Format key={obj.id} object={obj}/>);
        return (
<<<<<<< Updated upstream
            <div className="ml-8 pl-4">
=======
            <div className="pl-8">
>>>>>>> Stashed changes
                <button onClick={(e)=>setVisbility((prev)=>!prev)} className="font-bold w-full text-left">{object.name}</button>
                <div className={visibility?"":"hidden"}>{formatted}</div>
            </div>
        );
    }
    else return <Url object={object}/>;
}

<<<<<<< Updated upstream
export default Format;



=======
export default Format;
>>>>>>> Stashed changes
