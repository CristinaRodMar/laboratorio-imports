import { partida } from './modelo';

export function obtenerPuntosCarta(carta: number) {
    return carta > 7 ? 0.5 : carta;
}

export function sumaPuntuacion(puntos: number): number {
    return partida.puntuacion + puntos;
}

export const dameNumeroAleatorio = () => Math.floor(Math.random() * 10) + 1;

export const dameNumeroCarta = (numero: number) => (numero > 7 ? numero + 2 : numero);

export function actualizaPuntuacion(nuevosPuntos: number) {
    partida.puntuacion = nuevosPuntos;
}