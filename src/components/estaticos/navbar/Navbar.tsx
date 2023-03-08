import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./Navbar.css";

function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  function goLogout(){
    setToken('')
    alert("Usuário deslogado")
    navigate ('/login')
  }
  return (
    <>

      <AppBar className="barra" position="relative">
        <Toolbar variant="regular">
          <Box display='flex' justifyContent='space-between' width={'100%'}>
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start" gap="5px">
            <Box mx={1}  className="cursor">
              <Link to="/home" className="text-decorator-none">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Link>
            </Box>
            <Box mx={1}  className="cursor">
            <Link to="/postagens" className="text-decorator-none">
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
              </Link>
            </Box>
            <Box mx={1}  className="cursor">
            <Link to="/temas" className="text-decorator-none">
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
              </Link>
            </Box>
            <Box mx={1}  className="cursor">
            <Link to="/formularioTema" className="text-decorator-none">
              <Typography variant="h6" color="inherit">
                Cadastrar tema
              </Typography>
              </Link>
            </Box>
            <Box mx={1}  className="cursor" onClick={goLogout}>
                <Typography variant="h6" color="inherit" >
                  Logout
                </Typography>
            </Box>
          </Box>
          </Box>
        </Toolbar>
      </AppBar>

    </>
  );
}

export default Navbar;
