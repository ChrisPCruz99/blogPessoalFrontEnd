import React, { useState, useEffect } from "react";
import "./ListaPostagens.css";
import { busca } from "../../../services/Service";
import useLocalStorage from "react-use-localstorage";
import { useNavigate, Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core";
import Postagem from "../../../models/Postagem";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from 'react-toastify';

function ListaPostagens() {
  const [posts, setPosts] = useState<Postagem[]>([]);
  const token = useSelector<TokenState, TokenState['token']>(
    (state)=>state.token
  );
  let navigate = useNavigate();

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token == "") {
      toast.warn('Você precisa estar logado', {
        theme: "colored",
    });
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    getPost();
  }, [posts.length]);

  return (
    <>
      {posts.map((post) => (
        <Box m={2} height={'35vh'} width={'45vw'} >
          <Card  variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography>
              <Typography variant="h5" component="h2">
                {post.titulo}
              </Typography>
              <Typography variant="body2" component="p">
                {post.texto}
              </Typography>
              <Typography variant="body2" component="p">
                Postado em: {new Intl.DateTimeFormat('pt-BR',{dateStyle: 'short', timeStyle:'medium'}).format(new Date(post.date))}
              </Typography>
              <Typography variant="body2" component="p">
                {post.tema?.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioPostagem/${post.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarPostagem/${post.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaPostagens;
