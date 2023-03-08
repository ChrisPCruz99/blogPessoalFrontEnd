import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import ListaPostagens from './components/postagens/listaPostagem/ListaPostagens';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import UsuarioCadastro from './paginas/usuarioCadastro/UsuarioCadastro';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import CadastroPostagens from './components/postagens/cadastroPostagens/CadastroPostagens';
import DeletarPostagens from './components/postagens/deletarPostagem/DeletarPostagens';


function App() {
  return (
    <Router>
      <Navbar />
    <div style={{minHeight: '70vh'}}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<UsuarioCadastro />} />
        <Route path='/temas' element={<ListaTemas />} />
        <Route path='/postagens' element={<ListaPostagens />} />
        <Route path='/formularioTema' element={<CadastroTema />} />
        <Route path='/formularioTema/:id' element={<CadastroTema />} />
        <Route path='/deletarTema/:id' element={<DeletarTema />} />
        <Route path='/formularioPostagem' element={<CadastroPostagens />} />
        <Route path='/formularioPostagem/:id' element={<CadastroPostagens />} />
        <Route path='/deletarPostagem/:id' element={<DeletarPostagens />} />
      </Routes>
    </div>
      <Footer />
    </Router>
  );  
}

export default App;
