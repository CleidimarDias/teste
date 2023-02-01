import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MyForm = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Nome:" variant="outlined" />
      <TextField id="outlined-basic" label="CPF:" variant="outlined" />
      <TextField id="outlined-basic" label="Rua ou avenida:" variant="outlined" />
      <TextField id="outlined-basic" label="Complemento:" variant="outlined" />
      <TextField id="outlined-basic" label="Cidade:" variant="outlined" />
      <TextField id="outlined-basic" label="Estado:" variant="outlined" />

      <button variant="conteined" >clique aqui</button>

      
      </Box>
  )
}

export default MyForm