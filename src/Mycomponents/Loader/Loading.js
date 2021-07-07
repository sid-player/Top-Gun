import React from "react";
import Load from "../img/1.gif"
const LoaderComp = () => {


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
  return (
    <>
      <img src={Load} alt="loading..." className="w-16 mt-32 mb-0 md:mb-0 md:mt-36 h-auto md:ml-0 " />
      <div>
      <div
        className="anim-container block items-center justify-center md:justify-start text-gray-700 p-5   text-center md:text-left"
        style={{ letterSpacing: "2px" }}
      >
        <span>
          <div className=" text-base inline-block"> BUILDING DREAMS...</div>
         
          <div className="flip  float-center relative top-4 bottom-0 left-2">
            <div>
              <div className=" text-base relative -top-1">😎</div>
            </div>
            <div>
              <div className=" text-base relative top-3">❤</div>
            </div>
            <div>
              <div className=" text-base relative top-5">💪</div>
            </div>
          </div>
        </span>
      </div>
      </div>
      
    </>
  );

}
export default LoaderComp;