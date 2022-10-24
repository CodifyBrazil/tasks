import axios from "axios";
import { TaskListProps } from "../types/TaskListProps";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});


interface Props {
  id?: number
  params?: string
}

export const taskIntance = {
  getAll: async ({id, params}: Props) => {
    const mountParams = id?'/todos/'+id:'/todos'+params
    let { data } = await axiosInstance.get(mountParams);
    return data;
  },
  updateTaskId: async ({
    id,
    name,
    createAt,
    expireAt,
    isDone,
  }: TaskListProps) => {
    try {
      await axiosInstance.put(`/todos/${id}`, {
        id,
        name,
        createAt,
        expireAt,
        isDone,
      });
      return true;
    } catch (e) {
        return false;
    }
  },
  deleteTaskId: async (id: string) => {
    try {
      await axiosInstance.delete(`/todos/${id}`);
    } catch (e) {
      console.log(`Error Task.ts: ${e}`);
    }
  },
};

export const trashInstance = {
  getTrashAll: async (params?: string) => {
    //add filter params
    let data = await axiosInstance.get(`/trash${params ? `?${params}` : ""}`);
    return data;
  },
  insertTrashTaskId: async (id: number) => {
    // id:1
    // isDone: false
    // name: Pizza navigate Island Moroccan Dirham
    // insertAt: new Date

    let dataTask = await taskIntance.getAll({id});
  },
};
