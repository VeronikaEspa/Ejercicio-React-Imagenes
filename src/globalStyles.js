import {createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fonts/Spartan-Medium.ttf'
const GlobalStyles = createGlobalStyle`

.ContainerText{
    display: flex;
    margin: 10px;
    width: 50%;
    flex-direction: column;
}
.ContainerText p{
    font-size:20px;
    font-family: Spartan;
}
.ContainerImagen{
    display: flex;
    width: 40%;
    margin-left: 10px;
    justify-content: center;
}
.ContainerImagen img{
    width: 100%;
    height: 100%;
}
@font-face{
    font-family: "Spartan";
    src: local("Spartan"), url(${PrimaryFont}) format('ttf');
    font-style: normal;
}
// Esto sirve para no repetir el codigo 494709 mil veces en distintos css
`
export default GlobalStyles;