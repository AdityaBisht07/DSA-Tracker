import React, { useState } from 'react'
import { Link, Router, Routes , Route } from 'react-router-dom'
import Status from './Status';
function Navbar({mode,setmode}) {

    const [hidden1, sethidden1] = useState("hidden");
    const handleClick = () => {
      mode=="light" ? setmode("dark") : setmode("light");
    }

     
    return (
    <div>
  {/* Navbar */}
  <div className="flex justify-between items-center bg-yellow-600 px-6 py-3 shadow-md">
    {/* Brand / Logo */}
    <div>
      <Link 
        to="/" 
        className="text-white text-xl font-bold tracking-wide hover:text-gray-100 transition"
      >
        DSA Tracker
      </Link>
    </div>

    {/* Hot Tip Button */}
    <div 
      className="flex items-center space-x-2 cursor-pointer" 
      onClick={() => {
        console.log(hidden1);
        hidden1 === "hidden" ? sethidden1("visible") : sethidden1("hidden");
      }}
    >
      <img 
        src="bulb.png" 
        alt="Hot Tip" 
        className="w-7 h-7 object-contain"
      />
      <span className="text-white font-medium">Hot Tip</span>
    </div>
  </div>

  {/* Status Component */}
  <Status visi={hidden1} />
</div>

  )
}

export default Navbar
