import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';
import logoImage from '../../assets/logo.png';

export default function NewUser(){

    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function createNewUser(e){
        e.preventDefault();
        const data = {
            name,
            email,
            login,
            password,
        }
        try{
            await api.post('v1/user', data);
            navigate(`/users`);
        }catch(err){
            alert(err.response.data.message);
        }

    }


    return(
        <div className="new-user-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Imagem Logo Unichristus" />
                    <h1>Adicionar novo usuário</h1>
                    <p>Entre com as informações do usuário</p>
                    <Link className="back-link" to="/users">
                        <FiArrowLeft size={16} color="#251FC5" />
                        Home
                    </Link>
                </section>
                <form onSubmit={createNewUser}>
                    <input 
                    value={name}
                    onChange={ e => setName(e.target.value)}
                    placeholder="Nome Completo" 
                    />
                    <input 
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                    placeholder="E-mail" />
                    <input 
                    value={login}
                    onChange={ e => setLogin(e.target.value)}
                    placeholder="Login" />
                    <input 
                    type="password"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                    placeholder="Password" />

                    <button type="submit" className="button">
                        Salvar
                    </button>

                </form>
            </div>
        </div>
    );
}
