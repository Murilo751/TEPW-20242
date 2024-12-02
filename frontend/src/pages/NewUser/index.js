import React from 'react';
import {Link} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import logoImage from '../../assets/logo.png';

export default function NewUser(){
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
                <form>
                    <input placeholder="Nome Completo" />
                    <input placeholder="E-mail" />
                    <input placeholder="Login" />
                    <input placeholder="Password" />

                    <button type="submit" className="button">
                        Salvar
                    </button>

                </form>
            </div>
        </div>
    );
}
