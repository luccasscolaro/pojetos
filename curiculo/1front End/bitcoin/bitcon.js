function buscar() {
    var seletor = document.getElementById('moeda').value;
    var resultado = document.getElementById('resultado')


    fetch('https://api.coingecko.com/api/v3/simple/price?ids='+seletor+'&vs_currencies=brl')
        .then(response => response.json())
        .then(data => {
            var preco = data[seletor].brl;
            resultado.textContent =formatar(preco);
        }).catch(error => resultado.textContent = error);

        function formatar(valor){
            valor=Number(valor).toFixed(2).replace('.',',');
            valor="R$"+valor;
            
            return valor;
        }

}
