function Oi() {
    var olar = "Bem Vindo a Disciplina de Práticas de Programação";

    document.getElementById('Oi').innerText = olar;
}

function Soma4() {
    var valor1 = parseInt(document.getElementById("value1").value);
    var valor2 = parseInt(document.getElementById("value2").value);
    var valor3 = parseInt(document.getElementById("value3").value);
    var valor4 = parseInt(document.getElementById("value4").value);
    var valor11 = parseFloat(document.getElementById("value1").value);
    var valor22 = parseFloat(document.getElementById("value2").value);
    var valor33 = parseFloat(document.getElementById("value3").value);
    var valor44 = parseFloat(document.getElementById("value4").value);

    if (valor1 != valor11) {
        var result = "VALOR 1 NÃO É INTEIRO"
    } else {
        if (valor2 != valor22) {
            var result = "VALOR 2 NÃO É INTEIRO"
        } else {
            if (valor3 != valor33) {
                var result = "VALOR 3 NÃO É INTEIRO"
            } else {
                if (valor4 != valor44) {
                    var result = "VALOR 4 NÃO É INTEIRO"
                } else {
                    var result = valor1 + valor2 + valor3 + valor4;
                }
            }
        }
    }

    document.getElementById('result').innerText = result;
}

function Maior() {
    var valor1 = parseFloat(document.getElementById("value1").value);
    var valor2 = parseFloat(document.getElementById("value2").value);

    if (valor1 > valor2) {
        var result = valor1;
    } else {
        var result = valor2;
    }

    document.getElementById('result').innerText = "O maior valor é » " + result;
}

function Situacao() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    var media = (nota1 + nota2) / 2;

    if (media < 8) {
        var situ = "Anteção, você deve realizar nova prova!";
    } else {
        var situ = "Parabéns, você foi aprovado!";
    }

    document.getElementById('result').innerText = situ;
}

function Comprar() {
    var option = document.getElementById('option').value;
    var opcione = "Compra efetuada com sucesso de uma máquina"

    switch (option) {
        case "lava/seca":
            opcione += " completa"
            break;
        case "lava":
            opcione += " que somente lava"
            break;
        case "seca":
            opcione += " que somente seca"
            break;
        default:
            opcione = "Não trabalhamos com esse tipo de máquina aqui"
            break;
    }

    document.getElementById('result').innerText = opcione;
}

function Cont() {
    var cont = 0;
    var contador = "";

    while (cont <= 10) {
        contador += cont + "\n";
        cont++;
    }

    document.getElementById('result').innerText = contador;
}

function Contador() {
    var contador = "";

    for (var cont = 10; cont <= 20; cont++) {
        contador += cont + "\n";
    }

    document.getElementById('result').innerText = contador;
}