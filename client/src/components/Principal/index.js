import React from 'react';
import './Principal.css';
import { Link } from 'react-router-dom';
// import pokebola from '../../img/pokebola.png';

function index() {
    return (
        <div className="login-container">
            <div className='login-pokeball'>
                {/* <img className="index" src={}/> */}
            </div>
            <div className="login">
                <Link exact to={"/home"} className="link"><span className="button">ENTRAR</span></Link>
            </div>
        </div >
    )
}

export default index