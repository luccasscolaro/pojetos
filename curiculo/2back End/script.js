var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");


var raqueteAlutura = 3;
var raqueteLargura = 75;
var raqueteX = (canvas.width - raqueteLargura) / 2;
var velocidadeRaquete = 7;


var bolaRadius = 10;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 2;
var bolaDY = -2;


var setaDireita = false;
var setaEsequerta = false;

document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(tecla) {
    if (tecla.key === "Right" || tecla.key === "ArrowRight") {
        setaDireita = true;
    } else if (tecla.key === "left" || tecla.key === "Arrowleft") {
        setaEsequerta = true;
    }

}



function subirDaTecla() {

}

function desenharRaquete() {
    desenho.beginPath();
    desenho.rect(raqueteX, canvas.height - raqueteAlutura, raqueteLargura, raqueteAlutura);
    desenho.fillStyle = "blue";
    desenho.fill();
    desenho.closePath();

}

function desenhar() {
    desenho.clearRect(0, 0, canvas.width, canvas.height);
    desenharRaquete();
    if (setaDireita === true && raqueteX < canvas.width - raqueteLargura) {
        raqueteX = raqueteX + velocidadeRaquete;

    } else if (setaEsequerta && raqueteX > 0) {
        raqueteX = raqueteX - velocidadeRaquete;
    }

    requestAnimationFrame(desenhar)
}
desenhar();


