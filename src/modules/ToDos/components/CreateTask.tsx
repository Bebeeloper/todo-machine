import React from 'react'
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { createTaskType } from '../types/types';
import { palette_colors } from '../types/types';
import { getValue } from '@testing-library/user-event/dist/utils';
// import { LightDarkMode } from '../types/types';

function CreateTask(props: createTaskType) {

    // let task_input: string;
    const { createTaskMethod, openModal, setOpenModal, screenWidth, mode } = props;

    const {register, formState: {errors}, handleSubmit, reset, formState, getValues} = useForm({
        mode: "onChange"
    });
    
    const onSubmitModal = () => {
        const { task } = getValues();
        createTaskMethod(task);
        setOpenModal(false);
        reset();
    };

  return (
    <>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmitModal)} sx={{
            width: '100%', 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }} >
            <Typography textAlign={'center'} variant="h4" sx={{
                color: screenWidth > 800 && mode ? 
                        'white' : 
                        screenWidth > 800 && !mode ? 
                            'black' :
                            screenWidth <= 800 && mode ?
                                'white' :
                                'black',
                // mb: '40px',
                fontWeight: '700'
            }}>
                Crea una tarea
            </Typography>
            <TextField
                multiline
                maxRows={4}
                margin="normal"
                required
                // fullWidth
                id="task"
                label="Tarea"
                // name="task"
                autoComplete="task"
                autoFocus
                {...register('task', {required: true})}
                // inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
                sx={{
                    width: '80%'
                }}
            />
            {errors.task?.type === 'required' && <Typography variant="body1" sx={{color: palette_colors.error}}>Debe escribir una tarea</Typography>}
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                endIcon={<AddCircleOutlineIcon/>}
                style={{
                    width: '80%'
                }}
            >
                Crear tarea
            </Button>
        </Box>
    </>
  )
}

export default CreateTask;