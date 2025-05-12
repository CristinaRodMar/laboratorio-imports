export let puntuacion: number = 0;

export function obtenerPuntosCarta(carta: number) {
    return carta > 7 ? 0.5 : carta;
}

export function actualizaPuntuacion(nuevosPuntos: number) {
    puntuacion = nuevosPuntos;
}

export function sumaPuntuacion(puntos: number): number {
    return puntuacion + puntos;
}

export const dameNumeroAleatorio = () => Math.floor(Math.random() * 10) + 1;

export const dameNumeroCarta = (numero: number) => (numero > 7 ? numero + 2 : numero);

export const mostrarUrlCarta = (urlCarta: string) => {
    const cardImage = document.getElementById("card-image");
    if (cardImage instanceof HTMLImageElement) {
        cardImage.src = urlCarta;
    }
};

