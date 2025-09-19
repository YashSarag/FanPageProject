import React, { useRef, useState , useEffect } from 'react'
import logo_1 from "../assets/logo-1.png"
import { NavLink } from 'react-router'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function NavBar2(){
  const {menuClick,setMenuClick,menuHandler} = useContext(CounterContext);
  const menuRef = useRef(null);

  // function menuHandler(){
  //   setMenuClick(pre=>!pre);
  // }

  
  useEffect(() => {
    function handleClickOutside(event) {
      // If click is outside menu, close it
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuClick(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);




  return (
    <div className='w-[91%] max-w-[1080px] nav mx-auto flex items-center justify-between'>     
        <div className='nav-links-2'>
          {/* <div className='absolute left-5 top-5 text-4xl cursor-pointer'>
            {!menuClick &&
              <GiHamburgerMenu onClick={menuHandler}/>
            }
          </div> */}

          {<div className={`absolute left-0 top-0 h-full transition-all duration-[0.5s] bg-[#000000af] z-[1000] p-[20px] pt-[15px]`} 
            ref={menuRef}
            style={{transform: menuClick?"translateX(0px)":"translateX(-105%)"}}
          >
            <div className='text-white text-[20px] font-bold cursor-pointer mb-[15px] ml-[-10px]'>
              <RxCross2 onClick={()=>setMenuClick(false)}/>
            </div>
            <ul className='flex flex-col gap-[5px] text-[20px] opacity-1 text-richblack-100'>
              <li className='group'  onClick={menuHandler}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className='group' onClick={menuHandler}>
                <NavLink to='/biography'>Biography</NavLink>
              </li>
              <li className='group' onClick={menuHandler}>
                <NavLink to='/photo-gallery'>Photo Gallery</NavLink>
              </li>
              <li className='group' onClick={menuHandler}>
                <NavLink to='/video'>Videos</NavLink>
              </li>
              <li className='group' onClick={menuHandler}>
                <NavLink to='/fanwall'>Fan Wall</NavLink>
              </li>
              <li className='group' onClick={menuHandler}>
                <NavLink to='/fun-zone'>Fun Zone</NavLink>
            </li>
            </ul>
          </div>}
        </div>
    </div>
  )
}

export default NavBar2

// bfff00

// bg-[#000000af] p-[20px] pt-[40px]