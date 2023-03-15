import React, { useEffect } from "react";
import { Paper, Button, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagens";
import TabPostagens from "../../components/postagens/tabPostagem/TabPostagens";
import "./Home.css";
import {useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";
import { toast } from 'react-toastify';


function Home() {
  let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState['token']>(
    (state)=>state.token
  );

  useEffect(() => {
    if (token == "") {
      toast.warn('Você precisa estar logado', {
        theme: "colored",
    });
        navigate("/login")
    }
}, [token])

  return (
    <>
      <Grid container className="caixa" direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>  
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to='/postagens' className="text-decorator-none">
            <Button className="botao" variant="outlined"> Ver Postagens</Button>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <img
            src="https://i.imgur.com/H88yIo2.png"
            alt=""
            width="500px"
            height="500px"
          />
        </Grid>

        <Grid xs={12} className='postagens'></Grid>
        <TabPostagens />
      </Grid>
    </>
  );
}

export default Home;
