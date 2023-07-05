var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");


var raqueteAlutura = 3;
var raqueteLargura = 60;
var raqueteX = (canvas.width - raqueteLargura) / 2;
var velocidadeRaquete = 7;


var bolaRadius = 5;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 20;
var bolaDX = 2;
var bolaDY = -2;

var tijoloPorLinha = 3;
var tijoloProColuna = 6;
var tijoloLargura = 20;
var tijoloAlutara = 15;
var tijoloEspacamento = 10;
var espasmentoSuperiorQuadro = 1;
var espasmentoEsquerdoQuadro = 30;
var tijolos = [];
for (var coluna = 0; coluna < tijoloProColuna; coluna++) {
    tijolos[coluna] = []

    for (var linha = 0; linha < tijoloPorLinha; linha++) {

        tijolos[coluna][linha] = { x: 0, y: 0, ativo: 1 }
    }
}

var setaDireita = false;
var setaEsquerta = false;

document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(tecla) {
    if (tecla.key === "Right" || tecla.key === "ArrowRight") {
        setaDireita = true;
    } else if (tecla.key === "Left" || tecla.key === "ArrowLeft") {
        setaEsquerta = true;
    }

}



function subirDaTecla(tecla) {
    if (tecla.key === "Right" || tecla.key === "ArrowRight") {
        setaDireita = false;
    } else if (tecla.key === "Left" || tecla.key === "ArrowLeft") {
        setaEsquerta = false;
    }

}

function desenharRaquete() {
    desenho.beginPath();
    desenho.rect(raqueteX, canvas.height - raqueteAlutura, raqueteLargura, raqueteAlutura);
    desenho.fillStyle = "blue";
    desenho.fill();
    desenho.closePath();

}

function desanharBola() {
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2);
    desenho.fillStyle = "red";
    desenho.fill();
    desenho.closePath();
}


function desanharTijolos() {
    for (var coluna = 0; coluna < tijoloProColuna; coluna++) {
        for (var linha = 0; linha < tijoloPorLinha; linha++) {

            if(tijolos[coluna][linha].ativo==1){

                var tijoloX = (coluna * (tijoloLargura+ tijoloEspacamento)+ espasmentoEsquerdoQuadro);
                var tijoloY = (linha * (tijoloAlutara + tijoloEspacamento) + espasmentoSuperiorQuadro);
                
                tijolos[coluna][linha].x =tijoloX;
                tijolos[coluna][linha].y =tijoloY;

                desenho.beginPath();
                desenho.rect(tijoloX,tijoloY,tijoloLargura,tijoloAlutara);
                desenho.fillStyle="green"
                desenho.fill();
                desenho.closePath();
            }

        }
    }
}


function detectarColisao(){
    for(var coluna = 0; coluna <  tijoloProColuna; coluna++){
        for(var linha = 0; linha < tijoloPorLinha; linha++){
            
            var tijolo=tijolos[coluna][linha];

            if(tijolo.ativo===1){

                if(bolaX + bolaRadius >tijolo.x 
                    && bolaX - bolaRadius < tijolo.x + tijoloLargura
                    &&bolaY + bolaRadius > tijolo.y
                    &&bolaY - bolaRadius< tijolo.y + tijoloAlutara){
                        bolaDY= -bolaDY;
                        tijolo.ativo = 0;
                    }
            }
        }
    }
}


function gameover(){
    var gameover = document.getElementById("gameover");
    gameover.style.display = "block";
}

function Replay(){
    document.location.reload();
}

function desenhar() {
    desenho.clearRect(0, 0, canvas.width, canvas.height);
    desenharRaquete();
    desanharBola();
    desanharTijolos();
    detectarColisao()
    ;


    if (bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius) {
        bolaDX = - bolaDX;
    }

    if (bolaY + bolaDY < bolaRadius) {
        bolaDY = -bolaDY;
    } else if (bolaY + bolaDY > canvas.height - bolaRadius - raqueteAlutura) {

        if (bolaX  > raqueteX && bolaX < raqueteX + raqueteLargura) {
            bolaDY = -bolaDY;
        } else {
         gameover();
        }
    }




    if (setaDireita === true && raqueteX < canvas.width - raqueteLargura) {
        raqueteX = raqueteX + velocidadeRaquete;

    } else if (setaEsquerta === true && raqueteX > 0) {
        raqueteX = raqueteX - velocidadeRaquete;
    }

    bolaX = bolaX + bolaDX;
    bolaY = bolaY + bolaDY;

    requestAnimationFrame(desenhar)
}
desenhar();


