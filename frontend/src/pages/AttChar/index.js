import React from 'react';
import { Link } from 'react-router-dom';

function AttChar() {

    var saveOptions = function() {
        var inputs = document.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
            localStorage.setItem(`habilidades${i}`, inputs[i].value);
        }
    }

    return(
        <div className="loginContainer">
            <img className="avatarsCad avatarsSelected" src={localStorage.getItem('avatar')} alt="" />

            <form className="form">
                <h4 className="whatIDo">Olá {localStorage.getItem('nome')}, {localStorage.getItem('titulo')}! Defina suas habilidades</h4>
                <input required placeholder="Habilidade Principal"/>
                <input required placeholder="Habilidade de Suporte"/>
                <input required placeholder="Habilidade de Cura"/>
                <input required placeholder="Habilidade Reserva"/>
                <Link to="/cadPet"><button onClick={e => saveOptions()}>Próxima Etapa</button></Link>
            </form>

        </div>
    )
}

export default AttChar;