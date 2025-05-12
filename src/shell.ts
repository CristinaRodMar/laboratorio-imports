import "./style.css";

import { dameCarta, plantarse} from './motor';
import { botonNuevoJuego, boton, botonPlantarse, iniciarNuevaPartida} from './ui';

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
