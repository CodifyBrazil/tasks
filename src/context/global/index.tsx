import React, { createContext, ReactNode, useState , useContext} from "react";


interface Props {
    name: string
    fn: (name: string) => void
}

export const GlobaContext = createContext({} as Props);

export const GlobalProvider = ({children}: {children: ReactNode}) => {

    const [name, setName] = useState('Rafael');
    

    const fn = (name: string) => setName(name);

    return (
        <GlobaContext.Provider value={{name, fn}}>
            {children}
        </GlobaContext.Provider>
    )
}





export const useGlobal = () => useContext(GlobaContext)