import {createContext, useState, ReactNode} from 'react';

export const ChallengeContext = createContext({});

interface ChallengesProvieder{
    children:ReactNode
}

export function ChallengesProvieder({children}:ChallengesProvieder) {
    const [level,setLevel] = useState(1);
    const [currentExpirience, setCurrentExpirence] = useState(0);
    const [challengeCompleted,setChallengeCompleted] = useState(0);


    function levelUp(){
      setLevel(level+1);
    }
    return(
    <ChallengeContext.Provider value={{level,currentExpirience,challengeCompleted,levelUp}}>
        {children}
    </ChallengeContext.Provider>
    );
}