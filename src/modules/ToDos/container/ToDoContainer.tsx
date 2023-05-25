import React, { useState, useEffect } from 'react'
import ToDoCounter from '../components/ToDoCounter';
import ToDoSearch from '../components/ToDoSearch';
import ToDoList from '../components/ToDoList';
import ToDoItem from '../components/ToDoItem';
import { palette_colors } from '../types/types';
import taskPic from '../../../resources/task.png';

// Material ui
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CreateTask from '../components/CreateTask';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const styledModal = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: 5,
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

function ToDoContainer() {

  // ToDos Arrays
  const [toDos, setToDos] = useState<{text: string; completed: boolean}[]>([
    {text: 'Tatea 1', completed: true},
    {text: 'Tatea 2', completed: true},
    {text: 'Tatea 3', completed: false},
    {text: 'Tatea 4', completed: false},
    {text: 'Tatea 5', completed: false},
    {text: 'Tatea 6', completed: false},
    {text: 'Tatea 7', completed: false},
    {text: 'Tatea 8', completed: false},
    {text: 'Tatea 9', completed: false},
  ]);

  // ToDo filter
  const [filterToDos, setFilterToDos] = useState<string>('all');
  const [filterToDosSelect, setFilterToDosSelect] = useState<{value: string; text: string}[]>([
    {value: 'all', text: 'Todas'},
    {value: 'completed', text: 'Completadas'},
    {value: 'pending', text: 'Pendientes'}
  ]);

  // Modal
  const [openModal, setOpenModal] = React.useState(false);
  const handleClose = () => setOpenModal(false);

  // Screen width
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  // Dark light mode
  const [mode, setMode] = useState<boolean>(false);

  // Dark light mode theme
  const theme = createTheme({
      palette:{
          mode: mode ? "dark" : "light"
      }
  });

  const [toDosCompleted, setToDosCompleted] = useState<{text: string; completed: boolean}[]>(toDos.filter(toDo => toDo.completed === true));
  const [toDoPending, setToDoPending] = useState<{text: string; completed: boolean}[]>(toDos.filter((toDo) => toDo.completed === false));
  // const toDosCompleted = toDos.filter(toDo => toDo.completed === true);
  // const toDoPending = toDos.filter((toDo) => toDo.completed === false);

  console.log('toDosCompleted: ', toDosCompleted);
  
  // Calculate screen width in real time
  useEffect(() => {
    const handleWindowResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const completeToDos = (index: number) => {
    // switch (filterToDos) {
    //   case 'all':
    //     const newToDos = [...toDos];
    //     newToDos[index].completed = !newToDos[index].completed;
    //     setToDos(newToDos);
    //     // setToDosCompleted(toDos.filter(toDo => toDo.completed === true));
    //     // setToDoPending(toDos.filter((toDo) => toDo.completed === false));
    //     setToDosCompleted(newToDos);
    //     setToDoPending(newToDos);
    //     break;
    //   case 'completed':
    //     const newToDosCompleted = [...toDos];
    //     newToDosCompleted[index].completed = !newToDosCompleted[index].completed;
    //     setToDos(newToDosCompleted);
    //     // setToDosCompleted(toDos.filter(toDo => toDo.completed === true));
    //     // setToDoPending(toDos.filter((toDo) => toDo.completed === false));
    //     setToDosCompleted(newToDosCompleted);
    //     setToDoPending(newToDosCompleted);
    //     break;
    //   case 'pending':
    //     const newToDosPending = [...toDos];
    //     newToDosPending[index].completed = !newToDosPending[index].completed;
    //     setToDos(newToDosPending);
    //     // setToDosCompleted(toDos.filter(toDo => toDo.completed === true));
    //     // setToDoPending(toDos.filter((toDo) => toDo.completed === false));
    //     setToDosCompleted(newToDosPending);
    //     setToDoPending(newToDosPending);
    //     break;
    //   default:
    //     break;
    // }
    
  }

  const filterValue: any = {
    "all": toDos.map((todo, index) => (
      <ToDoItem 
        key={index} 
        index={index}
        text={todo.text}
        mode={mode}
        completeToDos={completeToDos}
        toDos={toDos}
        filterToDos={filterToDos}
      />
    )),
    "completed": toDosCompleted.map((todo, index) => (
      <ToDoItem 
        key={index} 
        index={index}
        text={todo.text}
        mode={mode}
        completeToDos={completeToDos}
        toDos={toDos}
        filterToDos={filterToDos}
      />
    )),
    "pending": toDoPending.map((todo, index) => (
      <ToDoItem 
        key={index} 
        index={index}
        text={todo.text}
        mode={mode}
        completeToDos={completeToDos}
        toDos={toDos}
        filterToDos={filterToDos}
      />
    ))
  };

  return (
    <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
      {screenWidth > 800 ? 
        <Paper square sx={{
          width:'100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: mode ? palette_colors.dark_background : palette_colors.light_letter
        }}>
          <Box sx={{
            pt: 1,
            pr: 2,
            alignSelf: 'flex-end'
          }}>
            <MaterialUISwitch onClick={() => setMode(!mode)}/>
          </Box>
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
                      <img src={taskPic} alt="imagen de tareas" style={{width: '60%'}} />
                  </Box>
                  <Box sx={{ 
                    width: '50%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Box sx={{
                      width: '100%',
                      height: '40%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      // bgcolor: 'red'

                    }}>
                      <ToDoCounter completed={2} total={5}/>
                      <ToDoSearch 
                        mode={mode} 
                        screenWidth={screenWidth}
                        filterToDos={filterToDos}
                        setFilterToDos={setFilterToDos}
                        filterToDosSelect={filterToDosSelect}
                        toDos={toDos}
                        setToDos={setToDos}
                        setToDosCompleted={setToDosCompleted}
                        setToDoPending={setToDoPending}
                      />
                    </Box>
                    <Box sx={{
                      width: '100%',
                      height: '60%',
                      position: 'relative',
                    }}>
                      <ToDoList>
                        {
                          // filterToDos === 'All' ? 
                          //   toDos.map((todo, index) => (
                          //     <ToDoItem 
                          //       key={index} 
                          //       index={index}
                          //       text={todo.text}
                          //       mode={mode}
                          //       completeToDos={completeToDos}
                          //       toDos={toDos}
                          //     />
                          //   )) : filterToDos === 'Completed' ? 
                          //         toDosCompleted.map((todo, index) => (
                          //           <ToDoItem 
                          //             key={index} 
                          //             index={index}
                          //             text={todo.text}
                          //             mode={mode}
                          //             completeToDos={completeToDos}
                          //             toDos={toDos}
                          //           />
                          //         )) : 
                          //         toDoPending.map((todo, index) => (
                          //           <ToDoItem 
                          //             key={index} 
                          //             index={index}
                          //             text={todo.text}
                          //             mode={mode}
                          //             completeToDos={completeToDos}
                          //             toDos={toDos}
                          //           />
                          //         ))
                          filterValue[filterToDos]
                        }
                        {/* {toDos.map((todo, index) => (
                          <ToDoItem 
                            key={index} 
                            text={todo.text}
                            mode={mode}
                            taskCompleted={taskCompleted}
                            setTaskCompleted={setTaskCompleted}
                          />
                        ))} */}
                      </ToDoList>
                    </Box>
                  </Box>
              </Paper>
          </Box>
        </Paper> :
        <Paper square sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: mode ? palette_colors.dark_background : palette_colors.light_letter
        }}>
          <Box sx={{
            width: '100%',
            height: '5%',
            pt: 1,
            pr: 2,
            alignSelf: 'flex-end',
            
          }}>
            <MaterialUISwitch onClick={() => setMode(!mode)} />
          </Box>
          <Box sx={{
            width: '100%',
            height: '95%',
            display: 'flex',
            flexDirection: 'column',
            // bgcolor: 'red'
          }}>
            <Box sx={{
              width: '100%',
              height: '30%',
              // bgcolor: 'blue'
            }}>
              <ToDoCounter completed={2} total={5}/>
              <ToDoSearch 
                mode={mode} 
                screenWidth={screenWidth}
                filterToDos={filterToDos}
                setFilterToDos={setFilterToDos}
                filterToDosSelect={filterToDosSelect}
                toDos={toDos}
                setToDos={setToDos}
                setToDosCompleted={setToDosCompleted}
                setToDoPending={setToDoPending}
              />
            </Box>
            <Box sx={{
              width: '100%',
              height: '70%',
              display: 'flex',
              flexDirection: 'column'
              // position: 'relative',
            }}>
              <Box sx={{
                width: '100%',
                height: '90%',
                position: 'relative'
              }}>
                <ToDoList>
                  {
                    filterToDos === 'all' ? 
                      toDos.map((todo, index) => (
                        <ToDoItem 
                          key={index} 
                          index={index}
                          text={todo.text}
                          mode={mode}
                          completeToDos={completeToDos}
                          toDos={toDos}
                          filterToDos={filterToDos}
                        />
                      )) : filterToDos === 'completed' ? 
                            toDosCompleted.map((todo, index) => (
                              <ToDoItem 
                                key={index} 
                                index={index}
                                text={todo.text}
                                mode={mode}
                                completeToDos={completeToDos}
                                toDos={toDos}
                                filterToDos={filterToDos}
                              />
                            )) : 
                            toDoPending.map((todo, index) => (
                              <ToDoItem 
                                key={index} 
                                index={index}
                                text={todo.text}
                                mode={mode}
                                completeToDos={completeToDos}
                                toDos={toDos}
                                filterToDos={filterToDos}
                              />
                            ))
                  }
                  {/* {toDos.map((todo, index) => (
                    <ToDoItem 
                      key={index} 
                      text={todo.text}
                      mode={mode}
                      taskCompleted={taskCompleted}
                      setTaskCompleted={setTaskCompleted}
                    />
                  ))} */}
                </ToDoList>
              </Box>
              <Box sx={{
                width: '100%',
                height: '10%'
              }}>
                <Button variant="contained" onClick={() => setOpenModal(true)} sx={{
                  width: '100%',
                  height: '100%'
                }}>Añadir tarea</Button>
                <Modal
                  open={openModal}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={styledModal}>
                    <CreateTask/>
                  </Box>
                </Modal>
              </Box>            
            </Box>
          </Box>
        </Paper>
      }
    </ThemeProvider>
  )
}

export default ToDoContainer