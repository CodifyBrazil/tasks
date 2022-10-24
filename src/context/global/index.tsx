import React, { createContext, ReactNode, useState , useContext} from "react";
import { TaskListProps } from '../../types/TaskListProps';
import { taskIntance } from '../../service/api'

interface T {
    id?: number
    params?: string
  }

interface Props {
    name: string;
    fn?: (name: string) => void;
    getSearchParams: (props: T) => Promise<TaskListProps[]>;

}



export const GlobaContext = createContext({} as Props);

export const GlobalProvider = ({children}: {children: ReactNode}) => {

    const [name, setName] = useState('Rafael');

    const [search, setSearch] = useState<string>('');
    
    const getSearchParams = async ({params}: T) => {
        const { data } = await taskIntance.getAll({params: params});
        
      

        return data
    }
    const fn = (name: string) => setName(name);

    return (
        <GlobaContext.Provider value={{name, getSearchParams}}>
            {children}
        </GlobaContext.Provider>
    )
}





export const useGlobal = () => useContext(GlobaContext)