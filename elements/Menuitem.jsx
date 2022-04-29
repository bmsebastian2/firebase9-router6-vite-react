import React from 'react'
import {
    Typography,
    MenuItem,
    
  } from "@mui/material";
  import { NavLink } from "react-router-dom";

const Menuitem = ({titulo,acceso,user,color}) => {
  return (
      <>
      {
          (!user && (titulo==='Sistema' || titulo==='Logout' ))?
          null    
          :
            <MenuItem>
            <NavLink
              to={acceso}
              style={{
                color: titulo !== "Sistema" ? color : "orange",
                textDecoration: "none",
              }}
            >
              <Typography textAlign="center">{titulo}</Typography>
            </NavLink>
          </MenuItem>

          
      }
      </>
  );
}

export default Menuitem