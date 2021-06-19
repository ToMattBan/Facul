import React, { useState } from 'react';
import avatar1 from '../../images/avatar1.svg';
import avatar2 from '../../images/avatar2.svg';
import avatar3 from '../../images/avatar3.svg';
import { useHistory } from "react-router-dom";
import api from '../services/api';

function CadChar() {

    const [nome, setNome] = useState('');
    const [titulo, setTitulo] = useState('');
    const [classe, setClasse] = useState('');
    const [raça, setRaca] = useState('');

    const history = useHistory();

    async function handleCadChar(e) {
        e.preventDefault();

        const dados = {nome, titulo, classe, raça};

        try {
            await api.post('player', dados);

            localStorage.setItem('nome', dados.nome);
            localStorage.setItem('titulo', dados.titulo);
            localStorage.setItem('classe', dados.classe);
            localStorage.setItem('raca', dados.raça);

            history.push("/attChar");
        } catch (error) {
            alert("Erro");
        }
    }

    var changeSlected = function(e) {
        var selected = document.querySelector('.avatarsSelected');
        selected && selected.classList.remove('avatarsSelected');
        e.target.classList.add('avatarsSelected');
        localStorage.setItem('avatar', e.target.src);
    }

    return(
        <div className="loginContainer">
            <img className="avatarsCad" onClick={e => changeSlected(e)} src={avatar1} alt="" />
            <img className="avatarsCad" onClick={e => changeSlected(e)} src={avatar2} alt="" />
            <img className="avatarsCad" onClick={e => changeSlected(e)} src={avatar3} alt="" />

            <form className="form" onSubmit={handleCadChar}>
                <h4 className="whatIDo">Escolha um avatar acima e preencha os campos abaixo.</h4>

                <input required placeholder="Nome" value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <input required placeholder="Título" value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                />
                <input required placeholder="Classe" value={classe}
                    onChange={e => setClasse(e.target.value)}
                />
                <input required placeholder="Raça" value={raça}
                    onChange={e => setRaca(e.target.value)}
                />

                <button type="submit">Próxima Etapa</button>
            </form>

        </div>
    )
}

export default CadChar;