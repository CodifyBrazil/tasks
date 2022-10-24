import { useContext } from 'react';
import { ExempleContext } from '../../context/global';

export const getListTask = async (params: string) => {
    const { getAllTask } = useContext(ExempleContext);
    console.log(getAllTask);
    let data = await getAllTask({params});
    return data;
}