import React, { useState,useContext } from 'react'
import toast from 'react-hot-toast';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { CounterContext } from '../context/CounterContext';
import success_ans from '../assets/decoration/success-ans-f.mp4'
import wrong_ans from '../assets/decoration/wrong-ans-f.mp4'

function QuestionCard({question,options,ans,file}){
    const {index,questions,setIndex} = useContext(CounterContext);
    // setIndex(0);
    const [selectedOption,setSelectedOption] = useState('');
    const [submit,setSubmit] = useState(false);
    const [flip,setFlip] = useState(false);
    const [score,setScore] = useState(0);
    const [color,setColor] = useState('');
    const [gif,setGif] = useState();
    const [gifWidth,setGifWidth] = useState();
    const [qAns,setQAns] = useState();

    function findAns(){
        if(ans == 'a'){
            return options.op1;
        }
        if(ans == 'b'){
            return options.op2;
        }
        if(ans == 'c'){
            return options.op3;
        }
        if(ans == 'd'){
            return options.op4;
        }
    }

    function optionClickHandler(op){
        setSelectedOption(op);
    }

    function submitHandler(){
        if(selectedOption === ''){
            toast.error('Select option');
            return;
        }
        setQAns(`${ans}${findAns()}`);
        if(ans === selectedOption){
            setGif(success_ans);
            setColor("bg-green-400");
            setGifWidth("200px");
        }
        else{
            setGif(wrong_ans);
            setColor("bg-red-400");
            setGifWidth("150px");
        }
        setSubmit(true);
        setFlip(true);
        if(ans == selectedOption) setScore(pre=>pre+1);
    }
    console.log("Ans",selectedOption);
  return (
    <div className='q-card mb-[20px] w-[91%] max-w-[400px] h-[550px] mx-auto rounded-[25px] overflow-hidden'>
        <div className={`h-full w-full relative q-card-container ${flip === true  ? "q-card-container-submit" : ""}`}>
            <div className={`front-q-card ${flip === true ? "pointer-events-none" : ""}`}>
                <div className='flex flex-col gap-y-[30px] h-full w-full px-[15px] py-[30px] text-slate-100 text-[20px] relative z-[105]'>
                    {
                        file && <div className=''>
                            {file}
                        </div>
                    }
                    <p className='px-[15px] text-black opacity-[5]'>Q. {question}</p>

                    <div className={`flex flex-col gap-[15px] ${submit === true ? "pointer-events-none" : ""}`}>
                        <div className={`bg-[#f1f5f98f] text-black px-[12px] pl-[30px] py-[10px] rounded-[15px] ${selectedOption === 'a' ? "option-bg" : "bg-[#f1f5f98f]" } cursor-pointer `} onClick={()=>optionClickHandler('a')}>
                            {options.op1}
                        </div>
                        <div className={`bg-[#f1f5f98f] text-black px-[12px] pl-[30px] py-[10px] rounded-[15px] ${selectedOption === 'b' ? "option-bg" : "bg-[#f1f5f98f]" } cursor-pointer`} onClick={()=>optionClickHandler('b')}>
                            {options.op2}
                        </div>
                        <div className={`bg-[#f1f5f98f] text-black px-[12px] pl-[30px] py-[10px] rounded-[15px] ${selectedOption === 'c' ? "option-bg" : "bg-[#f1f5f98f]" } cursor-pointer`} onClick={()=>optionClickHandler('c')}>
                            {options.op3}
                        </div>
                        <div className={`bg-[#f1f5f98f] text-black px-[12px] pl-[30px] py-[10px] rounded-[15px] ${selectedOption === 'd' ? "option-bg" : "bg-[#f1f5f98f]" } cursor-pointer`} onClick={()=>optionClickHandler('d')}>
                            {options.op4}
                        </div>
                    </div>

                    <div className='w-full flex-1 grid place-content-center'>
                        {submit === false &&
                            <button
                                onClick={submitHandler} className={`ans-submit relative bg-white mx-auto px-[25px] py-[10px] rounded-md block  ${submit === true ? "pointer-events-none" : ""}`}
                            >
                                <div className='text-black relative z-[100] text-[16px]'>Submit</div>
                            </button>
                        }

                        {
                            submit===true && 
                            <button
                                className={`ans-submit relative bg-white mx-auto px-[25px] py-[10px] rounded-md block`}
                                onClick={()=>setFlip(true)}
                            >
                                <div className='text-black relative z-[100] text-[16px]'>See Answer</div>
                            </button>
                        }
                    </div>
                </div>
                
            </div>

            <div className='back-q-card h-full w-full bg-white overflow-hidden'>
                {/* {selectedOption === ans ?
                    <div className='flex w-full justify-center mt-[10px]'>
                        <video src={success_ans} autoPlay muted loop
                                    className="w-[250px]"
                        />
                    </div>
                    : 
                    <div className='flex w-full justify-center my-[20px]'>
                        <video src={wrong_ans} autoPlay muted loop
                                    className="w-[150px]"
                        />
                    </div>
                } */}
                <div className='flex w-full justify-center my-[20px]'>
                        <video src={gif} autoPlay muted loop
                                    className={`w-[${gifWidth}]`}
                        />
                </div>
                    
                <div className='text-center text-[30px] font-bold opacity-75 mt-[15px]'>
                    {
                        selectedOption === ans ? ("Congratulations..!") : ("Wrong !")
                    }
                </div>

                {
                    <div className='max-w-max mx-auto text-center text-[20px] font-bold opacity-75 mt-[15px]'>
                        <span>Ans : </span><span>{qAns && qAns.toUpperCase()[0]}) </span>{qAns && qAns.length>26 ? qAns.slice(1,26)+'...' : qAns &&qAns.slice(1)}
                    </div>
                }

                <div className='max-w-max mx-auto text-center text-[30px] font-bold opacity-75 mt-[15px]'>
                    <span className='text-[25px]'>{index===questions.length-1 && "Final "}Score : </span>{score} <span className='text-[25px]'>/</span> {index+1}
                </div>



                <div className='z-[500] flex flex-col w-[80%] mx-auto mt-[50px] gap-[20px]'>
                    <button onClick={()=>{setFlip(false)}}
                        className={`${color} px-[18px] py-[10px] rounded-md font-semibold`}
                    >
                        <span className='opacity-80'>Back To Question</span>
                    </button>

                    {index < questions.length-1 && 
                        <button onClick={()=>{
                            if(index < questions.length-1){
                                setIndex(pre=>pre+1);
                                setFlip(false);
                                setSubmit(false);
                                setSelectedOption('')
                            }
                        }}
                            className={`${color} px-[18px] py-[10px] rounded-md font-semibold`}
                        >
                        <span className='opacity-80'>Next Question</span>
                    </button>}
                    {
                        index === questions.length-1 && selectedOption !== '' &&
                        <button onClick={()=>{
                                setIndex(0);
                                setFlip(false);
                                setSubmit(false);
                                setSelectedOption('');
                                setScore(0)
                        }}
                            className={`${color} px-[18px] py-[10px] rounded-md font-semibold`}
                        >
                        <span className='opacity-80'>Restart Quiz</span>
                    </button>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuestionCard