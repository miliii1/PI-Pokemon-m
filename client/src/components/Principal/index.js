import React from 'react';
import './Principal.css';
import { Link } from 'react-router-dom';
import pokemonFondo from '../../img/pokemonFondo.png';

function index() {
    return (
        <div className="login">
            <heade className="fondo">
                <img src={pokemonFondo} alt=" "/>
            </heade>
            <div className="contenedor-button">
                <div className="titulo">
                    <h2> BIENVENIDO
                <Link exact to={"/home"}><button>Ingresar</button></Link>
                </h2>
                </div>
            </div>
         </div>
    )
}

export default index