const styleBoxGeneral = {
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

  const makeMenu = [
    { titulo: "Inicio", acceso: "/" },
    { titulo: "Registro", acceso: "registro" },
    { titulo: "Logout", acceso: "logout" },
    { titulo: "Contactos", acceso: "contactos" },
    { titulo: "Sistema", acceso: "sistema" },
  ];
 


  export  {styleBoxGeneral,makeMenu}