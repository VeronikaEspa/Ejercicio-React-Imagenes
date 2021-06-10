import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

.ContainerText{
    display: flex;
    margin: 10px;
    width: 50%;
    flex-direction: column;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-family: 20px;
}
.ContainerImagen{
    display: flex;
    width: 50%;
    margin-left: 10px;
    justify-content: center;
}
.ContainerImagen img{
    width: 100%;
    height: auto;S
}
// Esto sirve para no repetir el codigo 494709 mil veces en distintos css
`
export default GlobalStyles;