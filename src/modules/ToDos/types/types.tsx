import { ReactNode } from "react";

export type createTaskType = {
    createTaskMethod: (task: string) => void;
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    screenWidth: number;
    mode: boolean;
}

export type ToDoCounterType = {
    completed: number;
    total: number;
};

export type ToDoItemType = {
    index: number;
    text: string;
    mode: boolean;
    completeToDos: (index: number, index_todos: number) => void
    deleteToDos: (index: number) => void;
    toDos: ToDos;
    filterToDos: string;
    indexTodos: number;
};

export type ToDos = {
    index_todos: number;
    text: string;
    completed: boolean;
}[]

export type ToDoListType = {
    children?: ReactNode;
};

export type ToDoSearchType = {
    mode: boolean;
    screenWidth: number;
    filterToDos: string;
    setFilterToDos: React.Dispatch<React.SetStateAction<string>>;
    filterToDosSelect: FilterToDos;
    toDos: ToDos;
    toDosCompleted: ToDos;
    toDosPending: ToDos;
    setToDos: React.Dispatch<React.SetStateAction<{
        index_todos: number;
        text: string;
        completed: boolean;
    }[]>>;
    setToDosCompleted: React.Dispatch<React.SetStateAction<{
        index_todos: number;
        text: string;
        completed: boolean;
    }[]>>;
    setToDosPending: React.Dispatch<React.SetStateAction<{
        index_todos: number;
        text: string;
        completed: boolean;
    }[]>>;
}

export type LightDarkMode = {
    mode: boolean;
    screenWidth: number;
}

type FilterToDos = {
    value: string;
    text: string;
}[]

export const palette_colors = {
    blue_background: '#5AA4EE',
    error: '#FF4D4D',
    light_letter: '#EFF3F5',
    modal_background: '#A0A7AC',
    dark_container: '#212E36',
    dark_background: '#192229'
}

// export type ToDoSearchType = {
//     screenWidth: number
// }