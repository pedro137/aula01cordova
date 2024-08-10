function carregou() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML = 'A página carregou!';

    document.addEventListener('deviceready', dispositivoPronto, true);

    document.addEventListener('pause', segundoPlano, true);

    document.addEventListener('resume', voltarTela, true);


}

function dispositivoPronto() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML += '<br>O dispositivo está pronto!';

}

function  segundoPlano() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML += '<br>App pausado';

}

function  voltarTela() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML += '<br>Voltei no App';

}