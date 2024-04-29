function helloWorld() {
    alert('Olá, Mundo!');
}

function soma() {
    var valor1 = parseInt(document.getElementById('valor1').value) || 0;
    var valor2 = parseInt(document.getElementById('valor2').value) || 0;
    var resultado = valor1 + valor2;
    document.getElementById('resultado').value = resultado;
}

function alterarId() {
    alert('Função alterarId() chamada!');
}

function alterarNome() {
    alert('Função alterarNome() chamada!');
}

function alterarClasse() {
    alert('Função alterarClasse() chamada!');
}
