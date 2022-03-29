let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // 32px cada quadrado

function criarBG() {
    context.fillStyle = "lightgreen"; // estilo do canvas
    context.fillRect(0, 0, 16 * box, 16* box); // desenha o retangulo onde ira acontecer o jogo
}

criarBG();



