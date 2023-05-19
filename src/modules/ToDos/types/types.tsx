import { ReactNode } from "react";

export type ToDoCounterType = {
    completed: number;
    total: number;
};

export type ToDoItemType = {
    text: string;
};

export type ToDoListType = {
    children?: ReactNode;
};

export const palette_colors = {
    error: '#FF4D4D',
    light_letter: '#EFF3F5',
    modal_background: '#A0A7AC',
    dark_container: '#212E36',
    dark_background: '#192229'
}