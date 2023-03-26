import React from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

const Search = ({inputUser, setInputUser, notFound}) => {
  const [valueInput, setValueInput] = useState('');

   const onSearchValueChange = (event) =>{
     const inputValue = event.target.value;
     setValueInput(inputValue);
   }

  const handleSubmit = () => {
    setInputUser(valueInput);
  }

  return(
    <Stack 
      direction= 'row'
      sx={{
        marginTop: '30px',
        width: '80%'
      }}

    >
      {notFound? <TextField error
                  id="outlined-error"
                  label="Error"
                  placeholder="Ingrese un usuario existente"
                  variant="outlined"
                  size="small"
                  value={valueInput}
                  onChange={onSearchValueChange}
                  sx={{
                      width: '90%',
                  }}/> 
                  : <TextField
                  id="outlined-basic"
                  label="GitHub User"
                  placeholder="Buscar usuario"
                  variant="outlined"
                  size="small"
                  value={valueInput}
                  onChange={(e) => onSearchValueChange(e)}
                  sx={{
                    width: '90%',
                  }}
                />}      
      <IconButton
      onClick={handleSubmit}
      size="small"
      sx={{
        left:'-45px'
      }} >
        <SearchIcon/>
      </IconButton> 
    </Stack>
  )
}

export default Search;