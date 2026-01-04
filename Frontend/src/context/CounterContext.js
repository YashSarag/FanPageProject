import { createContext } from "react";
import { useState } from "react";
export const CounterContext = createContext();

function CounterContextProvider({children}){
    let questions = [
        {
            question: "Where was Akshaan born?",
            options: {
                op1: "Delhi",
                op2: "Mumbai",
                op3: "Kolkata",
                op4: "Chennai",
            },
            ans: "b",
        },

        {
            question: "Waht role Akshhan plays in TMKOC?",
            options: {
                op1: "Veer Tanwar",
                op2: "Samay Binjola",
                op3: "Veer Binjola",
                op4: "Samay Tanwar",
            },
            ans: "c",
        },

        {
            question: "Waht role Akshhan played Baalshiv?",
            options: {
                op1: "Baal-Shiv",
                op2: "Baal-Vinshnu",
                op3: "Narad",
                op4: "Indra",
            },
            ans: "b",
        },

        {
            question: "Which of the following is Akshaan known for acting in?",
            options: {
                op1: "Dangal",
                op2: "Taare Zameen Par",
                op3: "Sitaare Zameen Par",
                op4: "Sunny Sanskari Ki Tulsi Kumari",
            },
            ans: "d",
        },
    

    ]
    const [index,setIndex] = useState(0);


    const [celebrate,setCelebrate] = useState(false);
    const [menuClick,setMenuClick] = useState(false);
    // const [year,setYear] = useState(2025);
    const targetDate = new Date(`2026-06-25T00:00:00`); //2026-06-25T00:00:00 2025-09-18T09:22:00
    function menuHandler(){
        setMenuClick(pre=>!pre);
    }
    function calculateRemainingTime(){
            const diff = targetDate.getTime() - new Date().getTime();
    
            if(diff <= 0){
                // setCelebrate(true);
                return {days:0,hours:0,minutes:0,seconds:0}
            }
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
            
    
            return{days,hours,minutes,seconds};
        }
    const [remainingTime,setRemainingTime] = useState(calculateRemainingTime());

    const value = {
        celebrate,setCelebrate,targetDate,calculateRemainingTime,remainingTime,setRemainingTime,menuClick,setMenuClick,menuHandler,index,setIndex,questions
    }

    return <CounterContext.Provider value={value}>
        {children}
    </CounterContext.Provider>
    
}

export default CounterContextProvider;