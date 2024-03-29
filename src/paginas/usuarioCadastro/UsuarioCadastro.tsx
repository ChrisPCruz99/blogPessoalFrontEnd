import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import Usuario from '../../models/Usuario';
import { cadastroUsuario } from "../../services/Service";
import { Link, useNavigate } from "react-router-dom";
import "./UsuarioCadastro.css";
import UsuarioLogin from "../../models/UsuarioLogin";
import { toast } from 'react-toastify';


function UsuarioCadastro() {
    
    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<Usuario>({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''})

    const [userResult, setUserResult] = useState<Usuario>({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''})

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            if (confirmarSenha === user.senha && confirmarSenha != "") {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
                toast.success("Usuario cadastrado com sucesso",{
                    theme: "colored"
                });
            } else {
                toast.error("As senhas não conferem.",{
                    theme: 'colored'
                });
            }
        } catch {
            toast.warn("Dados inconsistentes. Favor verificar as informações de cadastro.",{
                theme: 'colored'
            });
        }
    }
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid xs={6} className="img1"></Grid>
            <Grid xs={6} alignItems="center">
                <Box paddingX={12}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" align="center" className="txts2">Crie sua conta </Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}  id="nome" label="Nome completo" variant="outlined" name="nome" margin="none" fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" type="email" label="Usuário (e-mail)" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="foto(URL)" label="Foto" variant="outlined" name="foto" margin="normal" fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confimSenha" label="Confirmação de senha" variant="outlined" name="confimSenha" margin="normal" type="password" fullWidth />
                        <Grid container xs={12} justifyContent="space-between">
                            <Link to="/home" className="text-decorator-none1">
                                <Button className="botao2" type="submit" variant="contained" color="secondary">Cancelar</Button>
                            </Link>
                            <Button className="botao2" type="submit" variant="contained" color="primary">Cadastrar</Button>
                        </Grid>
                    </form>
                    <Box display="flex" justifyContent="center" marginTop={2}></Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default UsuarioCadastro;
