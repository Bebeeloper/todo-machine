import React from 'react'
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { palette_colors } from '../types/types';
// import { LightDarkMode } from '../types/types';

function CreateTask(/*props: LightDarkMode*/) {

    // const {screenWidth} = props;

    const {register, formState: {errors}, handleSubmit, reset, /*formState, getValues*/} = useForm({
        mode: "onChange"
    });
    
    const onSubmitModal = () => {
        reset();
    };

  return (
    <>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmitModal)} sx={{
            padding: '1rem',
            width: '80%', 
            height: '50%'
            // bgcolor: 'blue' 
        }} >
            <Typography variant="h4" sx={{
                // color: 'white',
                mb: '40px',
                fontWeight: '700'
            }}>
                Crea una tarea
            </Typography>
            <TextField
                multiline
                maxRows={4}
                margin="normal"
                required
                fullWidth
                id="Task"
                label="Tarea"
                // name="task"
                autoComplete="task"
                autoFocus
                {...register('task', {required: true})}
                // inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
            />
            {errors.task?.type === 'required' && <Typography variant="body1" sx={{color: palette_colors.error}}>Debe escribir una tarea</Typography>}
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                endIcon={<AddCircleOutlineIcon/>}
            >
                Crear tarea
            </Button>
        </Box>
    </>
  )
}

export default CreateTask;