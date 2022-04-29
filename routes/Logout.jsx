import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Button, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import {styleBoxGeneral} from '../src/variables'

const Logout = () => {
  const { user, setUser } = useContext(UserContext);
  
  return (
    <Box sx={styleBoxGeneral}>
      Informacion del usuario
      <h1 style={{ color: user ? "green" : "red" }}>
        {user ? "Usuario onLine" : "offline"}
      </h1>
     
      <Button variant='contained' onClick={() => setUser(false)}>
        <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
          <Typography textAlign="center">Deslogearse</Typography>
        </NavLink>
      </Button>
    </Box>
  );
};

export default Logout;
