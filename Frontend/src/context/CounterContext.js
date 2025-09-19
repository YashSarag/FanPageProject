import { createContext } from "react";
import { useState } from "react";
export const CounterContext = createContext();

function CounterContextProvider({children}){
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
        celebrate,setCelebrate,targetDate,calculateRemainingTime,remainingTime,setRemainingTime,menuClick,setMenuClick,menuHandler
    }

    return <CounterContext.Provider value={value}>
        {children}
    </CounterContext.Provider>
    
}

export default CounterContextProvider;