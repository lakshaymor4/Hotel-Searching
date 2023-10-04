import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Card = (props)=>{
    const{name , address , price , sqft ,image_url,rooms,beds,bathrooms,index  } = props
    
    const cardUrl = `/property/${index}`;
   
    return (
            <>
            <div className="bg-white pt-4 pl-4 pt-2 pb-2 rounded-[1rem] pr-2">
               <img src={image_url} className="w-[17rem] h-[12rem] rounded-[1rem]" />
               <h1 className="text-sm pt-2">{address}</h1>
               <h1 className="text-xl font-semibold pt-2">{name}</h1>
               <div className="flex felx-row pt-8">
                <h1 className="mr-2">{rooms} Room</h1>
                <h1 className="mr-2">{beds} Bed</h1>
                <h1 className="mr-2">{bathrooms} Bath </h1>
                <h1>{sqft} sqft</h1>
                
                </div>
                <div className="flex flex-row pt-10 items-center"> 
                <h1 className="text-indigo-700 font-bold">${price}<span className="text-black font-normal">/month</span></h1>
                <Link to={cardUrl} className="ml-10 pl-4 pr-4 pt-2 pb-2 rounded-[2.5rem] border-indigo-700 border-[0.2rem]">Read more</Link>
                </div>
            </div>
            </>

    )
}
export default Card