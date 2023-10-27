import React from "react";
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="loginContainer">
            <img src={logo} alt="" />

            <form className="form">
                <input required placeholder="Nome"/>
                <input required placeholder="Título"/>
                <button type="submit">Login</button>
                <Link to="/cadChar"><p className="forget">Cadastrar Novo Usuário</p></Link>
            </form>

        </div>
    );
}

export default Login;