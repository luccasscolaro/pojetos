function buscar() {
    var cep = document.getElementById('cep').value;
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            alert('fucionou');
            if (data.error) {
                document.getElementById('resultado').textContent = 'CEP não encontrado!';
            } else {
                document.getElementById('resultado').innerHTML = 
                '<strong>Cidade:</strong>' + data.localidade + '<br>'
                +'<strong>Cep:</strong>' + data.cep + '<br>'
                +'<strong>Logradouro:</strong>' + data.logradouro + '<br>'
                +'<strong>Bairro:</strong>' + data.bairro + '<br>'
                +'<strong>Complemento:</strong>' + data.Complemento + '<br>'
                +'<strong>Estado</strong>' + data.estado + '<br>'
                +'<strong>Código IBGE:</strong>' + data.ibge + '<br>';
                
            }
        }).catch(error => alert('deu errado', error));

}

