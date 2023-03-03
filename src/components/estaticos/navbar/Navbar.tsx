import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>

      <AppBar className="barra" position="relative">
        <Toolbar variant="regular">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1}  className="cursor">
              <Link to="/home" className="text-decorator-none">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Link>
            </Box>
            <Box mx={1}  className="cursor">
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            <Box mx={1}  className="cursor">
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            <Box mx={1}  className="cursor">
              <Typography variant="h6" color="inherit">
                Cadastrar tema
              </Typography>
            </Box>
            <Box mx={1}  className="cursor">
              <Link to="/login" className="text-decorator-none">
                <Typography variant="h6" color="inherit" style={{display:"flex", alignItems: "end", justifyContent: "end", textAlign: "end"}}>
                  Logout
                </Typography>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

    </>
  );
}

export default Navbar;
