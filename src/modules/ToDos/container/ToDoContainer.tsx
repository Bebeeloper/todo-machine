import React, { useState } from 'react'
import ToDoCounter from '../components/ToDoCounter';
import ToDoSearch from '../components/ToDoSearch';
import ToDoList from '../components/ToDoList';
import ToDoItem from '../components/ToDoItem';
import CreateToDoButton from '../components/CreateToDoButton';
import { palette_colors } from '../types/types';
import taskPic from '../../../resources/task.png'

// Material ui
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CreateTask from '../components/CreateTask';
import Switch from '@mui/material/Switch';

const toDos = [
    {text: 'Mejorar habilidades de programación', completed: false},
    {text: 'Diseñar logo Debugploy', completed: false}
];

function ToDoContainer() {

    const [mode, setMode] = useState(false);
    const theme = createTheme({
        palette:{
            mode: mode ? "dark" : "light"
        }
    });

  return (
    <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <Paper square sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: mode ? palette_colors.dark_background : palette_colors.light_letter
        }}>
            <Switch onClick={() => setMode(!mode)} sx={{
                alignSelf: 'flex-end'
            }}/>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'                
            }}>
                <Paper sx={{
                    padding: '20px',
                    width: '70%',
                    height: '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 2,
                    bgcolor: mode ? palette_colors.dark_container : 'white'
                }}>    
                    <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '50%',
                        height: '100%'
                        // bgcolor: 'blue'
                    }}>
                        <CreateTask/>
                        {/* <Box sx={{
                            width: '100%',
                            height: '50%',
                            bgcolor: 'yellow'
                        }}> */}
                            <img src={taskPic} alt="imagen de tareas" style={{width: '60%'}} />
                        {/* </Box> */}
                    </Box>
                    <Box sx={{ 
                        width: '50%',
                        height: '100%',
                        // bgcolor: 'green'
                    }}>Hola</Box>
                </Paper>
            </Box>
        </Paper>
      {/* <ToDoCounter 
        completed={2} 
        total={5}
      />
      <ToDoSearch />
      <ToDoList>
        {toDos.map((todo, index) => (
          <ToDoItem 
            key={index} 
            text={todo.text}
          />
        ))}
      </ToDoList>
      <CreateToDoButton /> */}
    </ThemeProvider>
  )
}

export default ToDoContainer