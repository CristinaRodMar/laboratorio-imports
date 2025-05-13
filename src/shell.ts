import "./style.css";

import { botonNuevoJuego, boton, botonPlantarse, iniciarNuevaPartida, dameCarta, plantarse } from './ui';

if (boton instanceof HTMLButtonElement) {
    boton.addEventListener("click", dameCarta);
}

if (botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.addEventListener("click", plantarse);
}

if (botonNuevoJuego instanceof HTMLButtonElement) {
    botonNuevoJuego.addEventListener("click", iniciarNuevaPartida);
}

document.addEventListener("DOMContentLoaded", iniciarNuevaPartida);