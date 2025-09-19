import React from 'react'
import birthdayImg from '../assets/Ak-Birthday-special.png';
import birthdayCard from '../assets/Happy-birthday-Akshann.png'
function BirthdayCard(){
  return (
    <div className='flex w-[91%] max-w-[1160px] mx-auto mb-[50px] birthday-card '>
       <div className='w-[550px] h-[550px] birthday-card-container birthday-animate'>
        <div className='birthday-card-front w-full h-full  '></div>
        <div className='birthday-card-back w-full h-full '></div>
       </div>
    </div>
  )
}

export default BirthdayCard