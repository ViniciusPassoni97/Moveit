import {createContext, useState, ReactNode} from 'react';

interface ChallengesProvieder{
    children:ReactNode
}

interface ChallengeContextData{
    level:number;
    currentExpirience:number;
    challengeCompleted:number;
    levelUp:()=>void;
    startNewChallenge:()=>void;
}

export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengesProvieder({children}:ChallengesProvieder) {
    const [level,setLevel] = useState(1);
    const [currentExpirience, setCurrentExpirence] = useState(0);
    const [challengeCompleted,setChallengeCompleted] = useState(0);


    function levelUp(){
      setLevel(level+1);
    }

    function startNewChallenge(){
        console.log('New ChallengeContext');
    }
    return(
    <ChallengeContext.Provider value={{
        level,
        currentExpirience,
        challengeCompleted,
        levelUp,
        startNewChallenge
    }}
    >
        {children}
    </ChallengeContext.Provider>
    );
}