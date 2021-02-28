import {createContext, useState, ReactNode, useEffect} from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';

interface ChallengesProvieder{
    children:ReactNode
}

interface Challenge{
    type:'body'|'eye';
    description:string;
    amount:number;
}

interface ChallengeContextData{
    level:number;
    currentExpirience:number;
    challengeCompleted:number;
    levelUp:()=>void;
    startNewChallenge:()=>void;
    activeChallenge:Challenge;
    resetChallenge:()=>void;
    completedChallenges:()=>void;
    experienceToNextLevel:number;
}

export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengesProvieder({children}:ChallengesProvieder) {
    const [level,setLevel] = useState(1);
    const [currentExpirience, setCurrentExpirence] = useState(10);
    const [challengeCompleted,setChallengeCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1)*4,2);

    useEffect(()=>{
        Notification.requestPermission()
    },[])

    useEffect(()=>{
        Cookies.set('level',String(level));
        Cookies.set('currentExpirience',String(currentExpirience));
        Cookies.set('challengeCompleted',String(challengeCompleted));
    },[level,currentExpirience,challengeCompleted]);

    function levelUp(){
      setLevel(level+1);
    }


    function startNewChallenge(){
        const random = Math.floor(Math.random()*challenges.length);
        const dataChallenge = challenges[random];
        setActiveChallenge(dataChallenge);
        new Audio('/notification.mp3').play();
        if(Notification.permission === 'granted'){
            new Notification('Novo Desafio ',{
                body: `Valendo ${dataChallenge.amount} xp!`
            });
        }
    }
    
    function resetChallenge(){
        setActiveChallenge(null);
    }


    function completedChallenges(){
        if(!activeChallenge){
            return;
        }

        const {amount} = activeChallenge;

        let finalExpirience = currentExpirience + amount;

        if(finalExpirience >= experienceToNextLevel){
            finalExpirience = finalExpirience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExpirence(finalExpirience);
        setActiveChallenge(null);
        setChallengeCompleted(challengeCompleted+1);
    }

    return(
    <ChallengeContext.Provider value={{
        level,
        currentExpirience,
        challengeCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completedChallenges
    }}
    >
        {children}
    </ChallengeContext.Provider>
    );
}