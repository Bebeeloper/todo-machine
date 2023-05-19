import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import { ToDoItemType } from '../types/types'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
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
    const { text, mode, taskCompleted, setTaskCompleted} = props
  return (
    <li style={{
      padding: '10px',
      margin: '10px', 
      display: 'flex',
      borderRadius: '10px',
      backgroundColor: mode === false ? palette_colors.blue_background : palette_colors.dark_background
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
        <Btn onClick={() => setTaskCompleted(!taskCompleted)} sx={{
          bgcolor: taskCompleted ? 'green' : 'none'
        }}>
          <CheckIcon />
        </Btn>
      </Box>
      <Box sx={{
        width: '80%'
      }}>
        <Typography color={palette_colors.light_letter}>
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