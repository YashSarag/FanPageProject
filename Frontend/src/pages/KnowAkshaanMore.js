import React, { useContext, useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import { CounterContext } from '../context/CounterContext';

function KnowAkshaanMore(){
    const {index,questions} = useContext(CounterContext);
    console.log(questions)
    
  return (
    <div className='w-[91%] max-w-[1160px] mx-auto game-box'>
        {
            <QuestionCard question={questions[index].question} options={questions[index].options} ans={questions[index].ans}/>
        }
    </div>
  )
}

export default KnowAkshaanMore