import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengeContext";

interface CountdownContext{
    minutes:number;
    seconds:number;
    hasFinished:boolean;
    active:boolean;
    handleTime:()=>void;
    handleReset:()=>void;
}

let countdownTimeOut : NodeJS.Timeout;

interface CountdownProvieder{
    children:ReactNode
}
export const CountDownContext = createContext({

} as CountdownContext);

export function CountdownProvider({children}:CountdownProvieder){
    const {startNewChallenge} = useContext(ChallengeContext);
    
    const [time,setTime] = useState(0.1*60);
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished ]= useState(false);
    
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function handleTime(){
        setActive(true);
    }

    
    function handleReset(){
        clearTimeout(countdownTimeOut);
        setActive(false);
        setTime(0.1*60);
        setHasFinished(false);
    }

    useEffect(()=>{
        if(active && time > 0){
            countdownTimeOut = setTimeout(()=>{
                setTime(time-1);
            },1000)
        }else if(active && time===0) {
            setHasFinished(true);
            setActive(false);
            startNewChallenge();
        }
    },[active,time]);

    return (
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            active,
            handleTime,
            handleReset
            }}>
            {children}
        </CountDownContext.Provider>
    );
}