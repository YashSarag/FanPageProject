import React from 'react'
import JigsawCoverImg from '../assets/Games/Jigsaw/Jigsaw-Cover.png'
import { useNavigate } from 'react-router'
import Confetti from '../components/Confetti';

function Games(){
    const navigate = useNavigate();
  return (
    <div className='w-[91%] max-w-[1160px] mx-auto mb-[50px] game-box'>

      
        <div className='w-[270px] rounded-xl overflow-hidden games-card hover:scale-[1.03] transition-all duration-300 hover:shadow-2xl'>
            <img src={JigsawCoverImg}
                className='w-full'
            />
           <div className='flex flex-col items-center pb-[10px] px-[8px]'>
                <h2 className='text-center font-bold mt-[10px] mb-[5px] text-lg'>Solve Jigsaw Puzzle</h2>
                <p className='text-center'>Piece together Akshaan's cutest smile!</p>
                <button className='text-[#ec4899] bg-white font-bold px-[18px] py-[5px] w-[80%] rounded-full mt-[10px] tracking-[1.5px]'
                    onClick={()=>navigate("/fun-zone/games/jigsaw")}
                >Play</button>
           </div>
        </div>
    </div>
  )
}

export default Games