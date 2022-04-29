import React, { useContext, useState } from 'react'
import { TextField, Button, Box } from '@mui/material'
import {UserContext} from '../context/UserProvider'

const Registro = () => {
    
  const {user, setUser, registerUser} = useContext(UserContext)
  
  
   const resetUser = {contraseña:'',email:''}
   const [persona,setPersona] = useState(resetUser)
    
   const handleSubmit = async (e) => {
        e.preventDefault()               
       
        try {
          await registerUser(persona.email, persona.contraseña);  
        } catch (error) {
            console.log(error.code)
        }
    }
    const handleOnchange = (e) => {      
     setPersona({
       ...persona,[e.target.name]:e.target.value
     })
  
    }
    const style = {
      position:'absolute',
      top:'50%',
      left:'50%',
      transform:'translate(-50%,-50%)',
      width:'40vw',
      bgcolor:'background.paper',
      border:'2px solid #000',
      boxShadow:24,
      p:4
    }
  return (
    <Box sx={style}>   
        {!user ? (
        <form onSubmit={handleSubmit}>
          <TextField
            name='email'
            value={persona.email}
            size="small"
            style={{ marginBottom: "0.8rem" }}
            type="email"
            variant="outlined"
            label="Ingrese email"
            placeholder="Ingrese correo"
            onChange={handleOnchange}
          />
          <TextField
            name='contraseña'
            value={persona.contraseña}
            size="small"
            type="password"
            variant="outlined"
            label="Ingrese password"
            placeholder="Ingrese password"
            onChange={handleOnchange}
          />
          <Button            
            type="submit"
            variant="contained"
          >
            Registrar
          </Button>
        </form>
      ) : (
        <h4>Usuario logeado</h4>
      )}
    </Box>
  );
}

export default Registro