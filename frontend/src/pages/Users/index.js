import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {FiPower, FiEdit, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

import './style.css';
import logoImage from '../../assets/logo.png';

export default function Users(){

    const [users, setUsers] = useState([]);

    const name = localStorage.getItem('name');

    const navigate = useNavigate();

    useEffect(() => {
        api.get("v1/user/all").then(response =>{
            setUsers(response.data);
        })
    }, [])
    return (
       <div className="user-container">
            <header>
                <img src={logoImage} alt="Imagem Logo Unichristus" />
                <span>Bem vindo, <strong>{name}</strong></span>
                <Link className="button" to="/user/new">
                Adicionar Usuário
                </Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>

            <h1>Lista de Usuários</h1>
            <ul>
                {users.map(user =>
                    <li>
                    <strong>Código</strong>
                    <p>{user.id}</p>
                    <strong>Nome Completo</strong>
                    <p>{user.name}</p>
                    <strong>E-mail</strong>
                    <p>{user.email}</p>
                    <strong>Usuário</strong>
                    <p>{user.login}</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />
                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5" />
                    </button>
                </li>
                )}
              
            </ul>

       </div>

    );
}