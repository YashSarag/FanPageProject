import React, { useContext, useEffect } from 'react'
import { CounterContext } from '../context/CounterContext'
import Confetti from '../components/Confetti';
import BirthdayCard from '../components/BirthdayCard';
import d1 from '../assets/decoration/d1.png'
import d2 from '../assets/decoration/d2.png'
import d3 from '../assets/decoration/d3.png'
import d4 from '../assets/decoration/d4.gif'

function BirthdayPage(){
    const {celebrate,setCelebrate,remainingTime,setRemainingTime,calculateRemainingTime} = useContext(CounterContext);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setRemainingTime(calculateRemainingTime);
            if(remainingTime.days == 0 && remainingTime.hours == 0 && remainingTime.minutes == 0 && remainingTime.seconds == 0){
                setCelebrate(true);
                clearInterval(timer);
            }
        },1000);

        return ()=> clearInterval(timer)
    })
  return (
    <div className='flex justify-center items-center w-[91%] max-w-[1160px] mx-auto h-full'>
        {
            celebrate ? (<div>
                <Confetti/>
                <BirthdayCard/>
            </div>) : (
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-center mb-[30px] text-[32px] bg-clip-text text-transparent font-bold h-full timer-caption tracking-[1px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
                        Not just a timer… It's excitement in numbers!
                    </div>
                    <div className='text-center mb-[30px] text-[32px] bg-clip-text text-transparent font-bold h-full timer-caption-2 hidden tracking-[1px] bg-gradient-to-r from-pink-500 via-red-500 to-orange-400'>
                        Not just a timer… <br/>It's excitement in numbers!
                    </div>
                    <div className='text-center mb-[30px] text-[32px] font-bold h-full timer-caption-3 hidden tracking-[1px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
                        Cake on Way...!
                    </div>
                    <div className='timer-container grid grid-cols-[1fr,0fr,1fr,0fr,1fr,0fr,1fr] place-items-center fanwall-colors max-w-max px-[70px] py-[50px] rounded-2xl select-none'>
                        <div className='flex flex-col items-center gap-[10px]'>
                            <div className='bg-slate-100 text-[48px] h-[80px] w-[125px] grid place-items-center rounded-md'>{remainingTime.days}</div>
                            <div className='text-slate-100 text-[20px] font-bold'>Days</div>
                        </div>
                        <div className='h-[80px] my-auto space-y-[20px] mx-[20px] timer-separator'>
                            <div className='bg-slate-100 w-[8px] h-[8px] rounded-full'></div><div className='bg-slate-100 w-[8px] h-[8px] rounded-full'></div>
                        </div>
                        <div className='flex flex-col items-center gap-[10px]'>
                            <div className='bg-slate-100 text-[48px] h-[80px] w-[125px] grid place-items-center rounded-md'>{remainingTime.hours}</div>
                            <div className='text-slate-100 text-[20px] font-bold'>Hours</div>
                        </div>
                        <div className='h-[80px] my-auto space-y-[20px] mx-[20px] timer-separator'>
                            <div className='bg-slate-100 w-[8px] h-[8px] rounded-full'></div><div className='bg-slate-100 w-[8px] h-[8px] rounded-full'></div>
                        </div>
                        <div className='flex flex-col items-center gap-[10px]'>
                            <div className='bg-slate-100 text-[48px] h-[80px] w-[125px] grid place-items-center rounded-md'>{remainingTime.minutes}</div>
                            <div className='text-slate-100 text-[20px] font-bold'>Minutes</div>
                        </div>
                        <div className='h-[80px] my-auto space-y-[20px] mx-[20px] timer-separator'>
                            <div className='bg-slate-100 w-[8px] h-[8px] rounded-full'></div><div className='bg-slate-100 w-[8px] h-[8px] rounded-full'></div>
                        </div>
                        <div className='flex flex-col items-center gap-[10px]'>
                            <div className='bg-slate-100 text-[48px] h-[80px] w-[125px] grid place-items-center rounded-md'>{remainingTime.seconds}</div>
                            <div className='text-slate-100 text-[20px] font-bold'>Seconds</div>
                        </div>
                    </div>
                </div>
            )
        }


            {celebrate && <div className='absolute top-0 h-screen w-screen bg-trasparent z-[800] pointer-events-none overflow-hidden'>
                <img src={d1}
                    className='img d1 w-[250px] absolute top-[50%] translate-y-[-50%] left-[100px]'
                />

                <img src={d4}
                    className='img w-[200px] absolute top-[50%] translate-y-[-50%] right-[100px]'
                />
            </div>}
        
    </div>
  )
}

export default BirthdayPage


//flex justify-cener items-center gap-[20px] fanwall-colors max-w-max px-[70px] py-[50px] rounded-2xl

//grid grid-cols-[2fr,1fr,2fr,1fr,2fr,1fr,2fr] place-items-center fanwall-colors max-w-max px-[70px] py-[50px] rounded-2xl
// bg-gradient-to-r from-orange-400 via-red-600 to-black
//bg-gradient-to-r from-pink-500 via-red-500 to-orange-400