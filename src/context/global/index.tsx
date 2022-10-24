import React, { createContext, ReactNode, } from "react";

import { taskIntance } from '../../service/api';
import { TaskListProps } from '../../types/TaskListProps';

interface Props {
    id?: number
    params?: string
  }

interface ExempleProps {
    getAllTask: (props: Props) => Promise<TaskListProps[]>
}


const getAllTask = async ({id, params}: Props) => {
    const tasksList = await taskIntance.getAll({id, params});

    return tasksList;
}

export const ExempleContext = createContext( {} as ExempleProps);

export const ExempleProvider = ({children}: {children: ReactNode}) => {
    return(
    <ExempleContext.Provider value={{getAllTask}}>
        {children}
    </ExempleContext.Provider>
    )
}