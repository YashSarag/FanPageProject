import React, { useContext, useEffect, useState } from 'react'
import { CounterContext } from '../context/CounterContext';

function Timer(){
    const {remainingTime,setRemainingTime,calculateRemainingTime} = useContext(CounterContext);
    
    useEffect(()=>{
        const timer = setInterval(()=>(setRemainingTime(calculateRemainingTime())),1000);

        return ()=>clearInterval(timer);
    },[]);
  return (
    <div className='flex gap-[8px] font-bold px-[20px] py-[10px] rounded-xl text-white opacity-80'>
        <div>
            <div className='bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 w-[43px] h-[43px] rounded-2xl grid place-items-center shadow-md shadow-[#000000a9]'>{remainingTime.days}</div>
            <div className='text-black text-center mt-[3px]'>Days</div>
        </div>
        <div>
            <div className='bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 w-[43px] h-[43px] rounded-2xl grid place-items-center shadow-md shadow-[#000000a9]'>{remainingTime.hours}</div>
            <div className='text-black text-center mt-[3px]'>Hr</div>
        </div>
        <div>
            <div className='bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 w-[43px] h-[43px] rounded-2xl grid place-items-center shadow-md shadow-[#000000a9]'>{remainingTime.minutes}</div>
            <div className='text-black text-center mt-[3px]'>Min</div>
        </div>
        <div>
            <div className='bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 w-[43px] h-[43px] rounded-2xl grid place-items-center shadow-md shadow-[#000000a9]'>{remainingTime.seconds}</div>
            <div className='text-black text-center mt-[3px]'>Secs</div>
        </div>
    </div>
  )
}

export default Timer