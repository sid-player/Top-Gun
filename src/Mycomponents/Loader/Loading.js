import React from "react";
import Load from "../img/1.gif"
const LoaderComp = ()=>{
      
  
    /*}    <ContentLoader 
    speed={4}
    width={900}
    height={400}
    viewBox="0 0 400 160"
    backgroundColor="#cccccc"
    primaryColor="#d9d9d9"
    
  >
    <rect x="0" y="0" width="900" height="20" /> 
    <rect x="0" y="30" width="900" height="20" /> 
    <rect x="0" y="60" width="900" height="20" /> 
    <rect x="0" y="90" width="900" height="20" /> 
    <rect x="0" y="120" width="900" height="20" /> 
    <rect x="0" y="150" width="900" height="20" /> 
</ContentLoader>*/
return(
  <img src={Load} alt="loading..." className="w-28 mt-10 h-auto md:ml-0 "/>
      
);       
  
}
export default LoaderComp;