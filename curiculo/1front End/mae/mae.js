var frase = "Mãe, eu te agradeço por tudo! Você me deu as oportunidades que você mesma nunca teve. Nos momentos bons ou ruins, você sempre me deu o seu melhor. E eu vou passar o resto da vida retribuindo com muito amor tudo que a senhora fez por mim. Feliz Dia das Mães!  "


function gerarFrase() {
    var texto = document.getElementById("frase");
    texto.innerHTML = frase;
}

function lerFrase() {
    var som = window.speechSynthesis;
    var discuro = new SpeechSynthesisUtterance(frase);
    som.speak(discuro);
}