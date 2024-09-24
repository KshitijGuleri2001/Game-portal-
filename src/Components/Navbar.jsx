import React, { useState } from "react";
import {  BiHelpCircle } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineClose, AiOutlineWallet, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { IoIosCube } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FiUser} from "react-icons/fi";


const Navbar = () => {
  const [nav,setNav] = useState(false)

  return (
    <nav className="bg-black text-white">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="items-center justify-between h-16">
          <div className="flex justify-between">
            <div className="flex-shrink-0 text-xl mt-3">
             PLAYZONE
            </div>
            <div className="hidden md:block mt-3">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  class="group p-5 cursor-pointer  relative  text-xl font-normal border-0  flex items-center justify-center bg-transparent text-red-500 h-auto w-[170px]  overflow-hidden transition-all duration-100">
                  <span class="group-hover:w-full absolute  left-0 h-full w-5  border-y border-l border-red-500 transition-all duration-500" ></span>
<p class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all duration-200" > HOME </p>
<span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200"> HOME </span>
<span class="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-red-500 transition-all duration-500"></span>
                </button >
                <button onClick={()=> setNav(!nav)}
                  class="group p-5 cursor-pointer  relative  text-xl font-normal border-0  flex items-center justify-center bg-transparent text-red-500 h-auto w-[170px]  overflow-hidden transition-all duration-100">
                  <span class="group-hover:w-full absolute  left-0 h-full w-5  border-y border-l border-red-500 transition-all duration-500" ></span>
<p class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all duration-200" > CATEGORY </p>
<span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200"> CATEGORY </span>
<span class="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-red-500 transition-all duration-500"></span>
                </button>
                <button
                  class="group p-5 cursor-pointer  relative  text-xl font-normal border-0  flex items-center justify-center bg-transparent text-red-500 h-auto w-[170px]  overflow-hidden transition-all duration-100">
                  <span class="group-hover:w-full absolute  left-0 h-full w-5  border-y border-l border-red-500 transition-all duration-500" ></span>
<p class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all duration-200" > ABOUT US </p>
<span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200"> ABOUT US </span>
<span class="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-red-500 transition-all duration-500"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {nav ? <div onClick={()=> setNav(!nav)} className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">    </div>
 : ''  }
      
        <div className={ nav ? 'fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>

          <AiOutlineClose 
          onClick={()=> setNav(!nav)}
           size={30} className="absolute right-4 top-4 cursor-pointer text-black" />
          <h2 className="text-2xl text-black p-4">
            CATEGORY
          </h2>
          <nav >
         
            <ul className="flex flex-col p-4 text-grey-800">
            <li className="text-xl py-4 flex">
                <FiUser size={25} className="mr-4 animate-bounce w-6 h-6" />
          
              </li>
              <li className="text-xl py-4 flex">
                <IoIosCube size={25} className="mr-4 animate-bounce w-6 h-6" />
            
              </li>
             
              <li className="text-xl py-4 flex">
                <BiHelpCircle size={25} className="mr-4 animate-bounce w-6 h-6" />
         
                
              </li>
              <li className="text-xl py-4 flex">
                <AiFillTag size={25} className="mr-4 animate-bounce w-6 h-6" />
          
              </li>
              <li className="text-xl py-4 flex">
                <BsFillSaveFill size={25} className="mr-4 animate-bounce w-6 h-6" />

              </li>
              <li className="text-xl py-4 flex">
                <FaUserFriends size={25} className="mr-4 animate-bounce w-6 h-6 " />
           
              </li>
            </ul>
          </nav>
        </div>
   
    
    </nav>
  );
};

export default Navbar;
