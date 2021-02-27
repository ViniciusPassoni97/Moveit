import {createContext, useState, ReactNode} from 'react';
import challenges from '../../challenges.json';

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
}

export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengesProvieder({children}:ChallengesProvieder) {
    const [level,setLevel] = useState(1);
    const [currentExpirience, setCurrentExpirence] = useState(0);
    const [challengeCompleted,setChallengeCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null)

    function levelUp(){
      setLevel(level+1);
    }


    function startNewChallenge(){
        const random = Math.floor(Math.random()*challenges.length);
        const dataChallenge = challenges[random];
        setActiveChallenge(dataChallenge);
    }
    return(
    <ChallengeContext.Provider value={{
        level,
        currentExpirience,
        challengeCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge
    }}
    >
        {children}
    </ChallengeContext.Provider>
    );
}