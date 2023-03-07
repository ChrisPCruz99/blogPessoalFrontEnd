import axios from "axios";
import { url } from "inspector";
import Login from '../paginas/login/Login';
import UsuarioCadastro from "../paginas/cadastro/UsuarioCadastro";

export const api = axios.create({
    baseURL: 'https://blogpessoal-kdt3.onrender.com'
})

export const cadastroUsuario = async(url: string, dados: Object, setDados: Function)=>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async(url: string, dados: Object, setDados: Function)=>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}
export const busca = async(url: string, setDados: Function, headers: any)=>{
    const resposta = await api.get(url, headers)
    setDados(resposta.data)
}