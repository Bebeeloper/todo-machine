import { Dispatch, ReactNode } from "react";

export type ToDoCounterType = {
    completed: number;
    total: number;
};

export type ToDoItemType = {
    text: string;
    mode: boolean;
    taskCompleted: boolean;
    setTaskCompleted: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ToDoListType = {
    children?: ReactNode;
};

export type LightDarkMode = {
    mode: boolean;
    screenWidth: number;
}

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