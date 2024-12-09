import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';

import './style.css';

import logoImage from '../../assets/logo.png';
import padlock from '../../assets/padlock.png';

export default function Login() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function authenticate(e){
    e.preventDefault();

    const data = {
      login,
      password
    };

    try{
      const response = await api.post('v1/user/auth/signin', data);

      localStorage.setItem('name', response.data.name);

      navigate('/users');
    }catch(err){
      alert(err.response.data.message);
    }

  };

  return (
   <div className="login-container">
      <section className="form">
        <img src={logoImage} alt="Imagem Logo Unichristus" />
        <form onSubmit={authenticate}>
          <h1>Acesse sua conta</h1>
          <input 
          placeholder="Usuário"
          value={login}
          onChange={e => setLogin(e.target.value)}
          />
          <input type="password" 
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>
        </form>
      </section>
      <img src={padlock} alt="Imagem Cadeado" />
   </div>

  );
}