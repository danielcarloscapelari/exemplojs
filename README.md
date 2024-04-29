<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="main.js" defer></script>
    <title>Exemplos Com JavaScript</title>
</head>

<body>
    <div class="container">
        <div class="card">
            <h1 class="title">Mostrar "Olá, Mundo!"</h1>
            <button onclick="helloWorld()">Mostrar 'Olá, Mundo!'</button>
        </div>

        <div class="card">
            <h1 class="title">Somar dois números inteiros</h1>
            <div class="input-group">
                <input id="valor1" type="number" placeholder="Valor 1">
                <input id="valor2" type="number" placeholder="Valor 2">
            </div>
            <button onclick="soma()">Calcular</button>
            <div class="result">
                <label for="resultado">Resultado:</label>
                <input id="resultado" type="text" readonly>
            </div>
        </div>

        <div class="card">
            <h1 class="title">Alterar elementos por ID, Name e Class</h1>
            <button onclick="alterarId()">Alterar elemento por ID</button>
            <button onclick="alterarNome()">Alterar elemento por Nome</button>
            <button onclick="alterarClasse()">Alterar elemento por Classe</button>
        </div>
    </div>
</body>

</html>
