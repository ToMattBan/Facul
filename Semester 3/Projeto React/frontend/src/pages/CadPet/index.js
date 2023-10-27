import React, { useState } from 'react';
import pet1 from '../../images/pet1.svg';
import pet2 from '../../images/pet2.svg';
import pet3 from '../../images/pet3.svg';
import { useHistory } from "react-router-dom";
import api from '../services/api'

function CadPet() {

    const [nome, setNome] = useState('');
    const [titulo, setTitulo] = useState('');
    const [cor, setCor] = useState('');

    const history = useHistory();

    async function handleCadPet(e) {
        e.preventDefault();

        const dados = {nome, titulo, cor};

        try {
            await api.post('pet', dados);

            localStorage.setItem('nomePet', dados.nome);
            localStorage.setItem('tituloPet', dados.titulo);
            localStorage.setItem('corPet', dados.cor);

            history.push("/attPet");
        } catch (error) {
            alert("Erro");
        }
    }

    var changeSlected = function(e) {
        var selected = document.querySelector('.avatarsSelected');
        selected && selected.classList.remove('avatarsSelected');
        e.target.classList.add('avatarsSelected');
        localStorage.setItem('pet', e.target.src);
    }

    return(
        <div className="loginContainer">
            <img className="avatarsCad" onClick={e => changeSlected(e)} src={pet1} alt="" />
            <img className="avatarsCad" onClick={e => changeSlected(e)} src={pet2} alt="" />
            <img className="avatarsCad" onClick={e => changeSlected(e)} src={pet3} alt="" />

            <form className="form" onSubmit={handleCadPet}>
                <h4 className="whatIDo">Escolha um pet acima e preencha os campos abaixo.</h4>
                <input required placeholder="Nome" value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <input required placeholder="Título" value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                />
                <input required placeholder="Cor" value={cor}
                    onChange={e => setCor(e.target.value)}
                />
                <button type="submit">Próxima Etapa</button>
            </form>

        </div>
    )
}

export default CadPet;