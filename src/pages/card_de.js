import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data/hotel.json";

const CardDeta = () => {
  const { index } = useParams(); 
  const card = data.hotels[index];
useEffect (()=>{
console.log( data.hotels[index]) 
  })
  

  
  return (
    <div className="bg-slate-200  h-screen pt-12">
    <div className=" max-h-max flex flex-row justify-center bg-slate-200  ">
    <div className="bg-white  pt-4 pl-4 max-w-max pt-2 pb-2 rounded-[1rem] pr-2">
               <img src={card.image_url} className="w-[17rem] h-[12rem] rounded-[1rem]" />
               <h1 className="text-sm pt-2">{card.address}</h1>
               <h1 className="text-xl font-semibold pt-2">{card.name}</h1>
               <div className="flex felx-row pt-8">
                <h1 className="mr-2">{card.rooms} Room</h1>
                <h1 className="mr-2">{card.beds} Bed</h1>
                <h1 className="mr-2">{card.bathrooms} Bath </h1>
                <h1>{card.sqft} sqft</h1>
                
                </div>
                <div className="flex flex-row pt-10 items-center"> 
                <h1 className="text-indigo-700 font-bold">${card.price}<span className="text-black font-normal">/month</span></h1>
                </div>
            </div>
            </div>
            </div>
  );
};

export default CardDeta;
