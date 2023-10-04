import React from "react";
import { useState ,useEffect} from "react";

const Butt = ({fun,val,auto})=>{

  


    return(
        <>
        {val=="New York"?<div >
      <button id={auto} autoFocus className=" pt-2 pb-2 pl-4 pr-4 bg-slate-300 rounded-[2.5rem] mr-4 focus:bg-blue-700 focus:text-white"onClick={()=>fun(val)}>{val}</button>
    </div>:<div >
      <button id={auto} className=" pt-2 pb-2 pl-4 pr-4 bg-slate-300 rounded-[2.5rem] mr-4 focus:bg-blue-700 focus:text-white"onClick={()=>fun(val)}>{val}</button>
    </div>}
     
    </>
    )
}
export default Butt