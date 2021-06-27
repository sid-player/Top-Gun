// import data from "../../BookmarkData";
// import {useState, useEffect} from "react";
// // import SearchIcon from '@material-ui/icons/Search';

// function Search()
// {
//     const [loading, setloading]= useState(false);
//     const [Search, setSearch]= useState("");
//     const [SearchResults, setSearchResults] = useState(data)
//     const [listToDisplay, setListToDisplay] = useState(null)

//       useEffect(()=>{
//         setListToDisplay(SearchResults.map( object => 
     
//     //    iterating over data
//        <div>
//             <a href={object.url} target="_blank" rel="noreferrer" className=" mt-3  justify-center text-sm md:text-l text-gray-700">
//                 <div className=" mt-4 justify-center overflow-hidden shadow transform hover:scale-105 hover:mb-2 hover:bg-gray-100  bg-gray-50  
//                   break-words   border-b-2 rounded p-4 md:p-8 my-1 font-medium  "
//               key={object.id}>
               
//                 {/* for dummy image */}
//                 {
//                     object.image.length !==0 ?
//                    <img src={object.image} alt="" className="w-full h-40 object-contain  justify-center"/>
//                     :
//                    <img src="https://picsum.photos/id/1/180" alt="" className="h-40
//                     object-contain justify-center"/>
//                 }

//                <div className= "truncate">
//                {object.name}
//                </div>
               
//                 </div>
//             </a>
//         </div>
//         ))
//     }, [SearchResults])

 
//     function exactSearch(event){
//         const searchItem= event.target.value;
//         setSearch(searchItem);
//     }

//     function onChangeHandler()
//     {
//         const value= Search;
//         if(value===""){
//             setSearchResults(data);
//             return;
//         }
//         const searchArray = value.toLowerCase().split(" ").filter(word=>word.length>0);
//         let scoreArray = []
//         data.forEach( object => {
//             let score=0;
//             let nameArray = object.name.toLowerCase().split(" ").filter(word=>word.length>0)
//             searchArray.forEach( word => {
//                 if(object.name.toLowerCase().includes(word))score+=5;
//                 if(object.url.toLowerCase().includes(word))score++;
//                 if(nameArray.includes(word))score+=5;
//             });
//             if(score)scoreArray.push([score,object]);
//         })
//         if(scoreArray.length){
//             scoreArray.sort((a,b)=>b[0]-a[0]);
//             let tempSearchResults = []
//             scoreArray.forEach( pair => tempSearchResults.push( pair[1] ));
//             setSearchResults( tempSearchResults )
//         }
//         else{
//             setListToDisplay(<div className="bg-white rounded p-5 my-5  ">No Match Found</div>);
//         }
//     }
    
//     return (

  
//     // search bar
//     <div className="Search my-4 flex flex-col items-center justify-center">
//       <div className="border-1 border-gray-100 shadow w-4/5 md:w-2/3 relative flex my-2">
//         <span className="flex items-center justify-center bg-white pl-4 z-20">
//           <img src={searchIcon} alt="search icon" style={{ height: "2vh" }} />
//         </span>
//         <input
//           className="bg-white appearance-none border-2 border-white  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-md z-0"
//           type="text"
//           placeholder="Search Anything..."
//           onChange={(e) => onChangeHandler(e.target.value)}
//         />
//       </div>

//         <div className=" border-2 border-gray-200 shadow-md w-2/5 md:w-2/3 relative  bg-gray-100 rounded-lg flex">
//         {/* <SearchIcon> */}
//             <input className="w-full rounded-full bg-gray-100 p-4  h-16 placeholder-gray-900" type="text" placeholder="Search Anything..." 
//              onChange={exactSearch} value={Search} />
//              <button onClick= {onChangeHandler} className= "ml-4 rounded-lg " > Search </button>
//         </div>

        
        
        

//         {/* content */}
           
//         <div className="relative mt-0  overflow-hidden grid gap-6 sm:grid-cols-1 w-1/2 h-1/2  md:w-2/3 grid-cols-3 lg:grid-cols-4">
//             {listToDisplay}
//         </div>

//       <div className="relative mt-0  overflow-hidden grid gap-6 sm:grid-cols-1 w-3/4 h-1/2  md:w-2/3 grid-cols-2 lg:grid-cols-4">
//         {listToDisplay}
//       </div>
//     </div>
//     );
// }

// export default Search;


import data from "../../BookmarkData";
import {useState, useEffect} from "react";

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";


function Search()
{
    // const [loading, setloading]= useState(false);
    const [Search, setSearch]= useState("");
    const [SearchResults, setSearchResults] = useState(data)
    const [listToDisplay, setListToDisplay] = useState(null)
   const [tag, setTag] = useState('')
   const [flag, setFlag] = useState(false)
    

    useEffect(()=>{
        console.log('render')
      
             return (
                setListToDisplay(SearchResults.map( object => 
     
                    //    iterating over data
                       
                             cardDisplay(object)
                        ))
            )
        
       
        
    }, [SearchResults,flag])

 
    function exactSearch(event){
        const searchItem= event.target.value;
        setSearch(searchItem);
    }
    
    function tagShow(){
        setFlag(true)
        //console.log(data.filter(obj=>obj.Tag=='temp'))
        const tag_data=data.filter(obj=>obj.Tag==='temp')
        setTag(tag_data)
      
    }
    function cardDisplay(object){
        return (
            <div>
            <a href={object.url} target="_blank" rel="noreferrer" className=" mt-3  justify-center text-sm md:text-l text-gray-700">
                <div className=" mt-4 justify-center overflow-hidden shadow transform hover:scale-105 hover:mb-2 hover:bg-gray-100  
                bg-gray-50 break-words border-b-2 rounded p-6 md:p-8 my-1 font-medium  "
              key={object.id}>
               
                {/* for dummy image */}
                {
                    object.image.length !==0 ?
                   <img src={object.image} alt="" className="w-full h-40 object-contain  justify-center"/>
                    :
                   <img src="https://picsum.photos/id/1/180" alt="" className="h-40
                    object-contain justify-center"/>
                }

               <div className= "truncate">
               {object.name}
               
               </div>
               <div className="border-2 rounded-xl text-center  mx-auto mt-2 bg-gray-200 font-bold text-gray-900">
                   {object.Tag}
               </div>
               
                </div>
            </a>
        </div>
        )
    }
    function onChangeHandler()
    
    {
        setFlag(false)
        const value= Search;
        if(value===""){
            setSearchResults(data);
            // setloading(false);
            return;
        }
        
        // setTimeout(()=>{
        //   console.log("loading");
        // },3000);

        // setloading(true);
    
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

        // setloading(false);
    }

    
    
    return (

        // search bar
    <div className="Search my-4 flex flex-col items-center justify-center">

        <div className=" border-2 border-gray-200 shadow-sm md:shadow-md w-4/5 md:w-2/3 relative  bg-gray-100 rounded-lg flex">
        {/* <SearchIcon> */}
            <input className="w-full rounded-full bg-gray-100 p-2  h-12  placeholder-gray-900" type="text" placeholder="Search Anything..." onChange={exactSearch} value={Search} />
             <button onClick= {onChangeHandler} className= "m-1 rounded-lg bg-gray-700 px-4 text-gray-100 hover:bg-gray-900" > Search </button>
        </div>

        <div className='my-3 flex flex-wrap -m-1 w-3/4 md:w-2/3'>
                <button className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer"onClick={tagShow} >Temp tag</button>
                
            
            </div>
        
        

        {/* content */}
           
           <div className="relative mt-0 overflow-hidden grid  gap-6 sm:grid-cols-1 w-3/4  md:w-2/3 grid-cols-2 lg:grid-cols-4">
           {
            //    loading === false ?
              
              flag? tag.map((objetc=>(
                  cardDisplay(objetc)
              ))):listToDisplay
            //    :
            //     <Loader
            //     type="Puff"
            //    color="#000000"
            //    height={200}
            //    width={200}
            //    timeout={3000} 
    //   />
           } 
           </div>

          
       

    </div>
    );
   
}

export default Search;