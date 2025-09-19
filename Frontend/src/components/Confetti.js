import React from 'react'
import ConfettiLib from "react-confetti";   // <-- renamed import to avoid clash
import { useWindowSize } from "react-use";

function Confetti(){
    const {height,width} = useWindowSize();
    console.log(height,width);
  return (
    <div>
        <ConfettiLib
            height={height}
            width={width}
            recycle={true}
            numberOfPieces={150}
            />
    </div>
  )
}

export default Confetti