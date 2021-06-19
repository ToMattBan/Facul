import React from 'react';
import { Link } from 'react-router-dom';

function AttPet() {

    var saveOptions = function() {
        var inputs = document.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
            localStorage.setItem(`habilidades${i}Pet`, inputs[i].value);
        }
    }

    return(
        <div className="loginContainer">
            <img className="avatarsCad avatarsSelected" src={localStorage.getItem('pet')} alt="" />

            <form className="form">
                <h4 className="whatIDo">Seu pet {localStorage.getItem('nomePet')}, {localStorage.getItem('tituloPet')} está pronto! Defina suas habilidades</h4>
                <input required placeholder="Habilidade Principal"/>
                <input required placeholder="Habilidade de Suporte"/>
                <Link to="/"><button onClick={e => saveOptions()}>Próxima Etapa</button></Link>
            </form>

        </div>
    )
}

export default AttPet;