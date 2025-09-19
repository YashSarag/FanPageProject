import React, { useEffect, useState } from 'react'
import CardPin from '../assets/CardPin.png'
import CardPin2 from '../assets/CardPin2.png'
import CardPin3 from '../assets/CardPin3.png'
import Masonry from 'react-masonry-css'
import { BsEmojiSmile } from "react-icons/bs";
import toast from 'react-hot-toast';
import Loader from '../components/Loader';



import {Filter} from 'bad-words';
const filter = new Filter();






function Fanwall(){

    const [loading,setLoading] = useState(true);
    const [selectedColor,setSelectedColor] = useState(undefined);
    const [formData,setFormData] = useState({
        name:"",message:"",date:"",color:"",city:""
    });


    async function postData({name,message,color,city,date}){
        try{
            const response = await fetch("http://localhost:8000/api/v1/createFanwallCard", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    user: name,
                    body: message,
                    city: city,
                    color: color,
                    createdDate: date
                }),
            });

            const data = await response.json();

            if(response.status === 200){
                setCards(pre=>([...pre,{user:name,body:message,color:color,city:city,createdDate:date}]));
                toast.success("Card created")
                setFormData({ name:"",message:"",date:"",color:"",city:""});
                setSelectedColor(null);
            }
            else{
                console.log("Internal server error");
                toast.error("Failed to create card")
            }
        }
        catch(err){
                console.log("Server down");
                toast.error("Failed to create card")
        }
    }

    async function fetchData(){
        setLoading(true);
        try{
            const res = await fetch("http://localhost:8000/api/v1/getFanwallCards");
            const data = await res.json();
            if(data.success === true){
                setCards(pre=>([card1,...data.data]));
            }
            else{
                console.log("Internal server error");
                toast.error("Failed to fetch data");
            }
        }
        catch(err){
            console.log("Server down");
            toast.error("Failed to fetch data");
        }
        setLoading(false);
    }

    function changeHandler(event){
        setFormData((pre)=>({
            ...pre,
            [event.target.name] : event.target.value,
            // date: new Date().toISOString().slice(0, 10)
        }))
        
    }

    function changeHandler2(event){
        setSelectedColor(`${event.target.value}`);
        setFormData((pre)=>({
            ...pre,
            [event.target.name] : event.target.value,
            // date: new Date().toISOString().slice(0, 10)
        }))
        
    }

    let card1 = {
        user:"Yash",
        body:"Dear Akshaan, I became your fan the very first time I saw you as Veer in TMKOC. Your cuteness, innocence, and natural acting instantly won my heart. You are truly special, and I’ll always support you as you grow in your journey.",
        createdDate: "2025-09-05",
        color:"#07FCE7",
        city: "Pune"
    }


    let [cards,setCards] = useState([card1])

    function submitHandler(event){
        event.preventDefault();
        let card = {
           ...formData,
           date: new Date().toISOString().slice(0, 19),
        }
        
        if(filter.isProfane(card.message)){
            toast.error("OOps, bad words not allowed");
            setFormData({ name:"",message:"",date:"",color:"",city:""});
            setSelectedColor(null);
            return;
            
        }
        console.log(card.date)
        postData(card);
        
    }
    const cols={
        default: 4,
        1100: 3,
        700: 2,
        500:1
    }
    function getRandom(len){
        let num = Math.floor(Math.random() * (len) + 0);
        console.log(num)
        return num;
    }
    

    
    // const colors = ['#00ffbd','#00ff58','#07fce7','#fce907','#F5F5F5','#E8F5E9','#E8F5E9',"#E3F2FD","#F5F5F5","#E8F5E9","#FFFDE7","#F3E5F5","#FFEBEE","#FFF3E0","#FFF9C4","#FFE0B2","#FFCDD2","#E1F5FE","#E0F7FA","#EDE7F6","#FCE4EC","#FFF8E1"]
    // const colors = ["#00FFBD","#00FF58","#07FCE7","#FCE907","#E3F2FD","#FFFDE7","#F3E5F5","#FFEBEE","#FFF3E0","#FFF9C4","#FFE0B2","#FFCDD2","#E1F5FE","#E0F7FA","#EDE7F6","#FCE4EC","#FFF8E1"
    // ];

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='w-full'>
        <a href='#form'>
            <button type='submit' className='fanwall-submit relative bg-white max-w-max mx-auto px-[20px] py-[6px] rounded-md block mb-[20px]'>
                <p>Write your message for Akshaan</p>
            </button>
        </a>
        <div className='fanwall min-h-[800px] w-[91%] max-w-[1500px] mx-auto mb-[50px] p-[30px] rounded-md'>
            <Masonry 
                breakpointCols={cols}
                columnClassName=''    
                className='w-full flex gap-[15px] z-20'>
                {
                
                    loading?

                    (<Loader/>):

                    cards.map((card)=>(
                        <div style={{backgroundColor: card.color}}
                            className={`fanwall-card z-[200] select-none p-[15px] pt-[20px] max-w-[300px] min-h-[150px] text-xl text-red-600 rounded-2xl relative mb-[15px]`}>
                            <img
                                className='w-[100px] rotate-[25deg] absolute top-[-25px] left-[50%] translate-x-[-50%]'
                                src={CardPin3}/>
                            <p className='text-xl'>{card.body}</p>
                            <div className='max-w-max ml-auto mt-[8px]'>
                                <p>-{card.user}</p>
                                <p className='text-sm ml-[10px]'>{card.createdDate.toString().split('T')[0]}</p>
                                <p className='text-sm ml-[10px]'>{card.city}</p>
                            </div>

                        </div>
                    ))
                
                }
            </Masonry>
            
        </div>
        <form id='form' onSubmit={submitHandler} className='relative z-[20] flex flex-col w-[80%] max-w-[600px] gap-[14px] mx-auto mb-[30px]' autoComplete='off'>
            <input className='w-full p-[10px] border-none outline-none rounded-md' type='text' name='name' value={formData.name} onChange={changeHandler} placeholder='Enter Your Name' required/>
            <input className='w-full p-[10px] border-none outline-none rounded-md' type='text' name='city' value={formData.city} onChange={changeHandler} placeholder='Enter Your City' required/>
            <textarea className='w-full p-[10px] border-none outline-none rounded-md' rows={5} name='message' value={formData.message} onChange={changeHandler} placeholder='Enter Your Message' required/>
            <div className=''>
            <div className='pointer-events-none absolute z-[-10] opacity-0'>
                    <input id='c1' type='radio' name='color' value='#00FFBD' onChange={changeHandler2} checked={formData.color==='#00FFBD'} required/>
                    <input id='c2' type='radio' name='color' value='#00FF58' onChange={changeHandler2} checked={formData.color==='#00FF58'}/>
                    <input id='c3' type='radio' name='color' value='#07FCE7' onChange={changeHandler2} checked={formData.color==='#07FCE7'}/>
                    <input id='c4' type='radio' name='color' value='#FCE907' onChange={changeHandler2} checked={formData.color==='#FCE907'}/>
                    <input id='c5' type='radio' name='color' value='#E3F2FD' onChange={changeHandler2} checked={formData.color==='#E3F2FD'}/>
                    <input id='c6' type='radio' name='color' value='#FFFDE7' onChange={changeHandler2} checked={formData.color==='#FFFDE7'}/>
                    <input id='c7' type='radio' name='color' value='#F3E5F5' onChange={changeHandler2} checked={formData.color==='#F3E5F5'}/>
                    <input id='c8' type='radio' name='color' value='#FFEBEE' onChange={changeHandler2} checked={formData.color==='#FFEBEE'}/>
                    <input id='c9' type='radio' name='color' value='#FFF3E0' onChange={changeHandler2} checked={formData.color==='#FFF3E0'}/>
                    <input id='c10' type='radio' name='color' value='#FFF9C4' onChange={changeHandler2} checked={formData.color==='#FFF9C4'}/>
                    <input id='c11' type='radio' name='color' value='#FFE0B2' onChange={changeHandler2} checked={formData.color==='#FFE0B2'}/>
                    <input id='c12' type='radio' name='color' value='#FFCDD2' onChange={changeHandler2} checked={formData.color==='#FFCDD2'}/>
                    <input id='c13' type='radio' name='color' value='#E1F5FE' onChange={changeHandler2} checked={formData.color==='#E1F5FE'}/>
                    <input id='c14' type='radio' name='color' value='#E0F7FA' onChange={changeHandler2} checked={formData.color==='#E0F7FA'}/>
                    <input id='c15' type='radio' name='color' value='#EDE7F6' onChange={changeHandler2} checked={formData.color==='#EDE7F6'}/>
                    <input id='c16' type='radio' name='color' value='#FCE4EC' onChange={changeHandler2} checked={formData.color==='#FCE4EC'}/>
                    <input id='c17' type='radio' name='color' value='#FFF8E1' onChange={changeHandler2} checked={formData.color==='#FFF8E1'}/>
            </div>

                <div className='flex w-full gap-[10px] flex-wrap justify-center fanwall-colors p-[20px] rounded-md'>
                    <label htmlFor='c1'><div className='bg-[#00FFBD] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer' >{selectedColor==="#00FFBD" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c2'><div className='bg-[#00FF58] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer' >{selectedColor==="#00FF58" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c3'><div className='bg-[#07FCE7] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer' >{selectedColor==="#07FCE7" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c4'><div className='bg-[#FCE907] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer' >{selectedColor==="#FCE907" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c5'><div className='bg-[#E3F2FD] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer'>{selectedColor==="#E3F2FD" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c6'><div className='bg-[#FFFDE7] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer'>{selectedColor==="#FFFDE7" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c7'><div className='bg-[#F3E5F5] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer'>{selectedColor==="#F3E5F5" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c8'><div className='bg-[#FFEBEE] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer'>{selectedColor==="#FFEBEE" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c9'><div className='bg-[#FFF3E0] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer'>{selectedColor==="#FFF3E0" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c10'><div className='bg-[#FFF9C4] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer'>{selectedColor==="#FFF9C4" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c11'><div className='bg-[#FFE0B2] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer'>{selectedColor==="#FFE0B2" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c12'><div className='bg-[#FFCDD2] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer'>{selectedColor==="#FFCDD2" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c13'><div className='bg-[#E1F5FE] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer'>{selectedColor==="#E1F5FE" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c14'><div className='bg-[#E0F7FA] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer'>{selectedColor==="#E0F7FA" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c15'><div className='bg-[#EDE7F6] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer'>{selectedColor==="#EDE7F6" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c16'><div className='bg-[#FCE4EC] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer'>{selectedColor==="#FCE4EC" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                    <label htmlFor='c17'><div className='bg-[#FFF8E1] flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer'>{selectedColor==="#FFF8E1" && <BsEmojiSmile className='text-[25px]'/>}</div></label>
                </div>

            </div>
            <button type='submit'
                    className='fanwall-submit relative bg-white max-w-max mx-auto px-[20px] py-[6px] rounded-md'
                    ><p className=''>Submit</p></button>
        </form> 
    </div>
  )
}


export default Fanwall

