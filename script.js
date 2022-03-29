let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // 32px cada quadrado
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8* box
}

function criarBG() {
    context.fillStyle = "lightgreen"; // estilo do canvas
    context.fillRect(0, 0, 16 * box, 16* box); // desenha o retangulo onde ira acontecer o jogo
}

function criarCobrinha() {
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();



