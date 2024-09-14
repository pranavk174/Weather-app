import React from 'react'
import { WiDayCloudy } from "react-icons/wi";

export default function Card({weather}) {
  return (
    <div className="h-[40vh] w-[30vw] text-center flex flex-col justify-center items-center">
       
      <div>
      <h1 className="text-[3rem] text-gray-600"> {weather.location} , {weather.country} </h1>
     <div>

     <p className="flex text-[2.3rem] items-center justify-center text-blue-500 "> <WiDayCloudy className="text-[3.5rem] mt-1 mr-3" /> <span className="text-blue-500">{weather.temperature} </span> <sup className="text-[1rem] text-start"> o </sup> c  </p>
     <p className="font-bold"> {weather.condition}</p>
     </div>
      </div>
      
          <div className="text-center w-[15rem] rounded-xl bg-white/50 px-4 py-2">
       <p className="text-[2.4rem]"> {weather.time.substring(11,16)} 
         <p className="text-[1rem]">{weather.time.substring(0,11)} </p>
       </p>
     </div>
     
    </div> 
  )
}
