import {useState} from 'react'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
// import { palette_colors } from '../types/types';
import { LightDarkMode } from '../types/types';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  // width: '100%',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  height: '100%',
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function ToDoSearch(props: LightDarkMode) {

  const { mode, screenWidth } = props;

  const Search = styled('div')(({ theme }) => ({
    width: '100%',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    backgroundColor: mode === false ? 'white' : alpha(theme.palette.common.white, 0.15),
    boxShadow: mode === false ? 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' : 'none',
    '&:hover': {
      // backgroundColor: alpha(theme.palette.common.white, 0.25),
      // backgroundColor: palette_colors.light_letter,
      // border: '0.1px solid blue',
      boxShadow: mode === false ? 'rgba(60, 64, 67, 0.5) 0px 1px 2px 0px, rgba(60, 64, 67, 0.2) 0px 2px 6px 2px' : 'none',
      backgroundColor: mode === false ? 'none' : alpha(theme.palette.common.white, 0.3),
    },
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const [filter, setFilter] = useState('All');

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: screenWidth > 800 ? 'space-between' : 'space-around'
    }}>
      <Search style={{width: '60%'}}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <FormControl sx={{width: '30%'}}>
      <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={filter}
        label="Filtro"
        onChange={handleChange}
      >
        <MenuItem value={'All'}>Todas</MenuItem>
        <MenuItem value={'Completed'}>Completadas</MenuItem>
        <MenuItem value={'Earring'}>Pendientes</MenuItem>
      </Select>
    </FormControl>
    </Box>
  )
}

export default ToDoSearch