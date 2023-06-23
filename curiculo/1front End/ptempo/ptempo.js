async function buscarClima() {
    var cidade = document.getElementById("cidade").value
    var chave = "6cd7f9dc8420618ca98e0c09ab832048";
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&appid=' + chave + '&units=metric';


    try {
        var resposta = await fetch(url);
        var dado = await resposta.json();
        var resultado = document.getElementById("resultado")
        resultado.innerHTML =
            '<h2>previsao de tempo para ' + dado.name + '</h2>'
            + '<P>temperatura:' + dado.main.temp + 'C°'
            
            +'<P>temperatura maxima:'+ dado.main.temp_max +'C°' 
            +'<P>temperatura mínima:'+ dado.main.temp_min +'C°'
            
            +'<img src= "https://openweathermap.org/img/wn/'+dado.weather[0].icon+'@4x.png">';

        alert("deu certo")
    } catch (error) {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "<P>erro ao procurar a clima" + error;
    }
}