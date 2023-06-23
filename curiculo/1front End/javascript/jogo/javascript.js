var jogador = 'X';

function jogar(celula) {
    //alert('funcionou!');

    if (celula.innerHTML == '') {

        celula.innerHTML = jogador;
        if (jogador == 'X') {
            jogador = 'O';
        } else {
            jogador = 'X';
        }

    }
}
function reiniciar() {
    window.location.reload();
}
const nomes = ['luccas', 'joao', 'athur'];
function gerarBatalha() {
    const nome1 = nomes[Math.floor(Math.random() * nomes.length)];
    const nome2 = nomes[Math.floor(Math.random() * nomes.length)];
    while (nome1 === nome2) {
        gerarBatalha();

    }

    document.getElementById('jogador1').textContent = nome1;
    document.getElementById('jogador2').textContent = nome2;
}

function adicionar() {
    var nome = document.getElementById("nome").value;
    nomes.push(nome)

    listar();
}

function listar() {
    var listagm = document.getElementById("lista");



    for (var i = 0; i < nomes.length; i++) {

        var item = document.createElement("li");

        var nomeItem = nomes[i];
        item.innerHTML = nomeItem;
        listagm.appendChild(item);


    }
}