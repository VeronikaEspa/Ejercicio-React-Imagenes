import React from 'react';
import '../utils/css/Footer.estilos.css'
import Foto2 from '../utils/images/kake.jpg'

const Footer = () => {
    return (
        <div className="Container_Footer">
            <img src={Foto2} className="ContainerImagen3" alt="Hola Lupe"/>
            <div className="ContainerText3">
            <h1>Hola! este es el componente Footer</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nemo quas accusamus iste officiis odit eaque perferendis quidem sapiente, harum, voluptas alias corrupti ratione tenetur ad cum voluptatibus? Recusandae, explicabo!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nemo quas accusamus iste officiis odit eaque perferendis quidem sapiente, harum, voluptas alias corrupti ratione tenetur ad cum voluptatibus? Recusandae, explicabo!</p>
            </div>
        </div>
    )
}

export default Footer