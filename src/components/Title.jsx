import React from 'react';
import '../utils/css/Title.estilos.css'
import {Link} from "react-router-dom";

const Title = () => {
    return (
        <div className="ContenedorTitle">
            <h1 id="tituloPrincipal">Series que deberías ver</h1>
            <Link to = "/contact">
            <button type="button">Me voy para Contact</button>
            </Link>
            <Link to = "/">
            <button type="button">Inicio</button>
            </Link>
        </div>
    )
}

export default Title