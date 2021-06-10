import React from 'react' //Importar siempre react
import '../utils/css/Cuerpo.estilos.css'
import Foto1 from '../utils/images/Foto1.jpg'
const Cuerpo = () => {
    return (
        <div className="Container_Cuerpo">
            <div className="ContainerText">
        <h1>Hola! este es el componente Cuerpito sabrosón</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nemo quas accusamus iste officiis odit eaque perferendis quidem sapiente, harum, voluptas alias corrupti ratione tenetur ad cum voluptatibus? Recusandae, explicabo!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nemo quas accusamus iste officiis odit eaque perferendis quidem sapiente, harum, voluptas alias corrupti ratione tenetur ad cum voluptatibus? Recusandae, explicabo!</p></div>
        <img className="ContainerImagen" src={Foto1} alt="Hola Juan"/>
        </div>
    )
}
export default Cuerpo