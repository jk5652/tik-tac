import React from 'react'
import { GrPowerReset } from "react-icons/gr";
import CircleIcon from '../assets/Oval Copy.png'
import CrossIcon from '../assets/CombinedShapeCopy.png'
import CrossIconGrey from '../assets/Combined Shape Copy 2.png'

const Game = () => {
  return (
    
    <main  className="w-full max-w-[375px] h-auto mx-auto flex flex-col items-center
    justify-center "
    >
      <div className="w-full flex items-center justify-between gap-1 px-6">
        <div className="flex">
          {" "}
          <img src={CrossIcon} alt="Cross Icon" className="w-6 h-6"/>
          <img src={CircleIcon} alt="Circle Icon" className="w-6 h-6"/>
        </div>
        <button className="border-none bg-[#1f3641] flex items-center gap-2 cursor-pointer  shadow-[0_5px_0_rgba(0,0,0,0.25)] rounded-[10px] w-30 px-3.5">
          <img src={CrossIconGrey} alt="CrossIcongrey" className="w-4 h-4"/>
          <h2 className="text-[#a8bfc9] text-[1.5rem] font-bold ">Turn</h2>
        </button>
        <button><GrPowerReset/></button>
      </div>
      <div className="grid grid-cols-3 gap-6 p-6 ">
        <div className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]"></div>
        <div className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]"></div>
        <div className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]"></div>
        <div className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]"></div>
        <div className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]"></div>
        <div className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]"></div>
        <div className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]"></div>
        <div className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]"></div>
        <div className="bg-gray-700 h-18 rounded-lg w-20 shadow-[0_5px_0_rgba(0,0,0,0.25)]"></div>
      </div>
      <div className="flex items-center justify-between text-xs text-black gap-2 ">
        <button className="bg-cyan-500 flex flex-col py-1 rounded-lg font-bold w-20">
          X (YOU)<span className="text-xl">0</span>
        </button>
        <button className="bg-blue-300 flex flex-col py-1 font-bold rounded-lg w-24">
          TIES <span className="text-xl">0</span>
        </button>
        <button className="bg-yellow-400 flex flex-col py-1 rounded-lg font-bold w-24">
          O (CPU) <span className="text-xl">0</span>
        </button>
       
      </div>
 
 
 </main>
  )
 
}

export default Game