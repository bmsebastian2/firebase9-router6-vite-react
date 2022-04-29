import React, { useContext,useState } from 'react';
import {UserContext} from '../context/UserProvider'
import DehazeIcon from '@mui/icons-material/Dehaze';
import Registro from '../routes/Registro';
import {styleBoxGeneral,makeMenu} from '../src/variables'
import {
  Typography,
  MenuItem,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Menu, 
  Container,
  Avatar,
  Button,
  Tooltip,
  Modal,
} from "@mui/material";
import {  NavLink, Navigate } from "react-router-dom";
import Menuitem from '../elements/Menuitem'
import Logo from '../elements/Logo'
const pages = ['home', 'contactos'];
const settings = ['Perfil'];

const Menu1 = () => {  

  const style = styleBoxGeneral
  const {user, setUser} = useContext(UserContext)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true)&&<Navigate to='contactos'/>;
  const handleClose2 = () => setOpen2(false);
  const accionhandleClose2 = (e) =>{
     (e) && setUser(false) && handleClose2()    
      handleClose2()        
  }
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
      
          <Logo medio='none' grande='flex'/>
        
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <DehazeIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {makeMenu.map((element, item) => (
                <Menuitem
                  key={item}
                  titulo={element.titulo}
                  acceso={element.acceso}
                  user={user}
                  color={"black"}
                />
              ))}
            </Menu>
          </Box>
         
          <Logo medio='flex' grande='none'/>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {makeMenu.map((element, item) => (
              <Menuitem
                key={item}
                titulo={element.titulo}
                acceso={element.acceso}
                user={user}
                color={"white"}
              />
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir configuraciones">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  style={{ color: user ? "green" : "red" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              {!user &&
                <MenuItem key="MENU3" onClick={() => setUser(true)}>
                <Typography textAlign="center">
                  Account</Typography>
              </MenuItem>
              }

              {user && (
                <>
                  <MenuItem key="1233" onClick={handleOpen2}>
                    <Typography textAlign="center">Logout </Typography>
                  </MenuItem>
                  <Modal
                    open={open2}
                    onClose={handleClose2}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <h4>Quiere salir</h4>

                      <NavLink
                        to="/"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          onClick={() => accionhandleClose2(true)}
                        >
                          <Typography textAlign="center">Si</Typography>
                        </Button>
                      </NavLink>

                      <NavLink
                        to="logout"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          onClick={() => accionhandleClose2(false)}
                        >
                          <Typography textAlign="center">No</Typography>
                        </Button>
                      </NavLink>
                    </Box>
                  </Modal>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Menu1