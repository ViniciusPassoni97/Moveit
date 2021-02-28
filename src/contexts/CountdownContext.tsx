import { createContext, ReactNode } from "react";

interface CountdownContext{

}


interface CountdownProvieder{
    children:ReactNode
}
const CountDownContext = createContext({

} as CountdownContext);

export function CountdownProvider({children}:CountdownProvieder){
    return (
        <CountDownContext.Provider value={{}}>
            {children}
        </CountDownContext.Provider>
    );
}