import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from 'react-redux';
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from '../../../store/tokens/Action';


function Navbar() {
    const token = useSelector<TokenState, TokenState['token']>(
    (state)=>state.token
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function goLogout(){
    dispatch(addToken(''));
    alert("Usuário deslogado")
    navigate('/login')
}

    var navbarComponent;

  if(token != ''){
    navbarComponent = <AppBar className="barra" position="relative">
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
  }
  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;
