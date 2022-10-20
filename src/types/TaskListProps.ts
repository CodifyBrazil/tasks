export type TaskListProps ={
    id: number;
    name: string;
    createAt: string;
    expireAt: string;
    isDone: boolean;
}

export type trashProps = {
    id: number;
    name: string;
    days: number;
    insertAt: string;
    isDone: boolean;
}