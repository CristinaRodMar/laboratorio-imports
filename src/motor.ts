import { puntuacion, obtenerPuntosCarta, actualizaPuntuacion, sumaPuntuacion, dameNumeroAleatorio, dameNumeroCarta, mostrarUrlCarta } from './modelo';
import { botonNuevoJuego, muestraPuntuacion, mostrarGameOver, bloquearBotones,  mostrarMensaje, obtenerUrlCarta} from './ui';

export function revisarPartida() {
    if (puntuacion > 7.5) {
        mostrarMensaje("Game Over");
        mostrarGameOver();
        bloquearBotones();
    } else if (puntuacion === 7.5) {
        mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
        mostrarGameOver(); 
        bloquearBotones();
    }
}

export function mostrarMensajePlantarse(): void {
    if (puntuacion < 4) {
        mostrarMensaje("Has sido muy conservador");
    } else if (puntuacion === 5) {
        mostrarMensaje("Te ha entrado el canguelo eh?");
    } else if (puntuacion >= 6 && puntuacion < 7) {
        mostrarMensaje("Casi casi...");
    } else if (puntuacion === 7.5) {
        mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
    }
}

export function dameCarta(): void {
    const numeroAleatorio = dameNumeroAleatorio();
    const carta = dameNumeroCarta(numeroAleatorio);
    const urlCarta = obtenerUrlCarta(carta);
    mostrarUrlCarta(urlCarta);
    const puntosCarta = obtenerPuntosCarta(carta);
    const puntosSumados = sumaPuntuacion(puntosCarta);
    actualizaPuntuacion(puntosSumados);
    muestraPuntuacion();
    revisarPartida();
}

export function plantarse() {
    mostrarMensajePlantarse();
    bloquearBotones();
    if (botonNuevoJuego instanceof HTMLButtonElement) {
        botonNuevoJuego.style.display = "inline-block";
    }
}