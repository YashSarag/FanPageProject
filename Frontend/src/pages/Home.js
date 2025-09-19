import React from 'react'
import hero_img from '../assets/hero-f.webp'
import hero_img2 from '../assets/gallery-1.jpg';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import Timer from '../components/Timer';
import { NavLink } from 'react-router';
function Home(){
  return (
    <div className='w-full h-[600px] overflow-hidden hero relative flex justify-center items-center'> 
        <NavLink to="/birthday">
          <div className='absolute bottom-0 left-[50%] translate-x-[-50%] z-[200] grid place-items-center scale-[0.7] hover:scale-[0.74] transition-transform duration-300 cursor-pointer'>
            <Timer/>
          </div>
        </NavLink>
        <div className='absolute top-0 left-0 bottom-0 right-0'>
          <img className='w-full relative hero-img'
          loading='lazy'
            src={hero_img}
          />
          <img className='w-full relative hero-img2'
          loading='lazy'
            src={hero_img}
          />
        </div>
        
          <div className='w-[91%] max-w-[800px] h-auto mx-auto hover:scale-[1.015] transition-all duration-[0.4s] relative z-[300]'>
            <h1 className='hero-heading text-[48px] text-center font-extrabold  opacity-75 mb-[20px]'>Welcome to Akshaan Sehrawat Fan Site</h1>
            <p className='text-[25px] text-center'>It's ultimate Akshaan fan zone</p>
            <div className='mt-[20px]'>
              <p className='text-center'>Support Akshaan at</p>

              <ul className='flex gap-[20px] text-3xl mx-auto max-w-max mt-[10px]'>
                <li className='hover:text-red-500 transition-all duration-200'>
                  <a href='https://www.instagram.com/akshaansehrawat_official?igsh=MWpjcWY1cTBhYjFpbA==' target='_blank'>
                    <FaSquareInstagram/>
                  </a>
                </li>
                <li className='hover:text-red-500 transition-all duration-200'>
                  <a href='https://www.facebook.com/akshaan.sehrawat.7' target='_blank'>
                    <FaFacebook/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
    </div>
  )
}

export default Home



//  <div className='w-full h-[600px] overflow-hidden hero relative'>
//         <img className='w-full relative'
//             src={hero_img}
//         />
//         <div className='absolute z-[100] top-0 left-0 bottom-0 right-0 flex items-center justify-center' >
//           <div className='w-[11/12] max-w-[800px] mx-auto flex flex-col items-center justify-center gap-[20px] hover:scale-[1.015] transition-transform duration-[0.5s]'>
//             <h1 className='text-[48px] text-center font-extrabold mt-[-50px] opacity-75'>Welcome to Akshaan Sehrawat Fan Site</h1>
//             <p className='text-[25px] text-center'>Welcome to the ultimate Akshaan fan zone</p>
//           </div>
//         </div>
//     </div>