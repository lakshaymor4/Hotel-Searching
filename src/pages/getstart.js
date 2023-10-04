import React, { useState, useEffect , useRef } from "react";
import Card from "./cards";
import Butt from "./but";
import data from "../data/hotel.json";

const Gs = () => {
    const handle = ()=>{
        setShowMore(!showMore)

    }
    
  const [vall, setVall] = useState("New York");
  const [searchResults, setSearchResults] = useState([]);
  const [showMore, setShowMore] = useState(false);
   

  const loadDefaultResults = () => {
    const results = data.hotels.filter((hotel) =>
      hotel.location.toLowerCase().includes(vall.toLowerCase())
    );
    setSearchResults(results);
  };
    const visibleResults = showMore ? searchResults : searchResults.slice(0, 6);

  const fun = (vaal) => {
    setVall(vaal);
  };

  useEffect(() => {
    loadDefaultResults();
  }, [vall]); 

  return (
    <>
      <div className="pt-4 bg-slate-200 flex flex-col items-center ">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-indigo-900">
            Featured Listed Property
          </h1>
          <p className="text-sm mt-2">
            Real estate can be bought, sold, leased, or rented, and can be a<br />
            valuable investment property opportunity. The value of real estate
            can be...
          </p>
        </div>
        <div className="flex flex-row max-w-max pt-4">

         <Butt fun={fun} val="New York" auto="a1"  />
         
          <Butt fun={fun} val="Mumbai" auto="a2" />
          <Butt fun={fun} val="Paris" auto="a2"/>
          <Butt fun={fun} val="London" auto="a2" />
        </div>
        <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 gap-4  pt-10 ">
        
          {visibleResults.map((hotel, index) => (
            
            
            
            
           
            <Card
              image_url = {hotel.image_url}
              name={hotel.name}
              address={hotel.address}
              price={hotel.price}
              sqft={hotel.sqft}
              rooms={hotel.rooms}
              beds={hotel.beds}
              bathrooms={hotel.bathrooms}
              index = {hotel.id}
             
            />
           
          ))}
          
        </div>
        <button onClick={handle} className="bg-blue-500 max-w-max mt-4 pt-2 pb-2 pl-4 pr-4 text-white rounded-[2.5rem]">
            {showMore ? "Show Less" : "Show More"}</button>
        </div>
      </div>
    </>
  );
};

export default Gs;
