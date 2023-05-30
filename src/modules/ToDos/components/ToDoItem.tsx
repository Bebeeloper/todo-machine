import React from 'react'
import { styled } from '@mui/material/styles';
import { ToDoItemType } from '../types/types'
import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { palette_colors } from '../types/types';


const Btn = styled('div')(({ theme }) => ({
  width: '100%',
  // height: '50px',
  padding: '5px',
  borderRadius: '50%',
  cursor: 'pointer',
  '&:hover': {
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
    // backgroundColor: palette_colors.light_letter,
    // border: '0.1px solid blue',
    padding: '5px',
    backgroundColor: 'none',
    borderRadius: '50%'
  }
}));

function ToDoItem(props: ToDoItemType) {
    const { index, text, mode, completeToDos, toDos, filterToDos, indexTodos} = props
  return (
    <li style={{
      padding: '10px',
      margin: '10px', 
      display: 'flex',
      borderRadius: '10px',
      // backgroundColor: mode === false ? palette_colors.blue_background : palette_colors.dark_background
      backgroundColor: mode === false ? 
                          filterToDos === 'all' ?
                            toDos[index].completed ? palette_colors.modal_background : palette_colors.blue_background 
                          :
                            filterToDos === 'pending' ? palette_colors.blue_background : palette_colors.modal_background
                       : 
                          filterToDos === 'all' ?
                            toDos[index].completed ? palette_colors.dark_background : palette_colors.dark_container 
                          :
                            filterToDos === 'pending' ? palette_colors.dark_container : palette_colors.dark_background
      // boxShadow: mode === false ? 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' : 'none',
      // boxShadow: mode === false ? 'rgba(0, 0, 0, 0.3) 1.95px 1.95px 2.6px' : 'none',
    }}>
      <Box sx={{
        padding: 1,
        width: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* <Btn onClick={() => {completeToDos(index, indexTodos)}} sx={{
          bgcolor: filterToDos === 'all' ? toDos[index].completed ? 'green' : 'none' : filterToDos === 'pending' ? 'none' : 'green'
        }}>
          <CheckIcon />
        </Btn> */}
        <IconButton onClick={() => {completeToDos(index, indexTodos)}} sx={{
          color: filterToDos === 'all' ? toDos[index].completed ? 'green' : 'none' : filterToDos === 'pending' ? 'none' : 'green'
        }}>
          <CheckIcon />
        </IconButton>
      </Box>
      <Box sx={{
        width: '80%'
      }}>
        <Typography color={palette_colors.light_letter} sx={{
          color: filterToDos === 'all' ? toDos[index].completed ? palette_colors.dark_container : 'white' : filterToDos === 'pending' ? 'white' : palette_colors.dark_container,
          textDecorationLine: filterToDos === 'all' ? toDos[index].completed ? 'line-through': 'none' : filterToDos === 'pending' ? 'none' : 'line-through'
        }}>
          {text}
        </Typography>
      </Box>
      <Box sx={{
        width: '10%'
      }}>
        <span>X</span>
      </Box>
    </li>
  )
}

export default ToDoItem