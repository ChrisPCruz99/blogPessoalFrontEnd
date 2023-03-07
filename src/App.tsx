import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/UsuarioCadastro';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import ListaPostagens from './components/postagens/listaPostagem/ListaPostagens';

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
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/temas' element={<ListaTemas />} />
        <Route path='/postagens' element={<ListaPostagens />} />
      </Routes>
    </div>
      <Footer />
    </Router>
  );  
}

export default App;
