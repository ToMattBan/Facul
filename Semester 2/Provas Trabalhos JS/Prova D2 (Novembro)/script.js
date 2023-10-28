function Eu() {
    var myName = "ToMatt";
    var myAge = "xx anos";

    document.getElementById('Euzis').innerText = "Olá, meu nome é » " + myName +
        " « e minha idade é de » " + myAge + " « completos!";
}

function Mult3() {
    var valor1 = parseInt(document.getElementById("value1").value);
    var valor2 = parseInt(document.getElementById("value2").value);
    var valor3 = parseInt(document.getElementById("value3").value);
    var valor11 = parseFloat(document.getElementById("value1").value);
    var valor22 = parseFloat(document.getElementById("value2").value);
    var valor33 = parseFloat(document.getElementById("value3").value);

    if (valor1 != valor11) {
        document.getElementById('result').innerText = "VALOR 1 NÃO É INTEIRO";
    } else {
        if (valor2 != valor22) {
            document.getElementById('result').innerText = "VALOR 2 NÃO É INTEIRO";
        } else {
            if (valor3 != valor33) {
                document.getElementById('result').innerText = "VALOR 3 NÃO É INTEIRO";
            } else {
                var result = valor1 * valor2 * valor3;
                document.getElementById('result').innerText = valor1 + " * " + valor2 + " * " + valor3 + " = " + result;
            }
        }
    }
}

function ParImpar() {
    var valor = parseFloat(document.getElementById("value").value);

    var result = valor % 2;
    if (result == 0) {
        var situ = "PAR!"
    } else {
        var situ = "IMPAR!"
    }

    document.getElementById('result').innerText = "O valor é » " + situ;
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

function Cores() {
    var op = document.getElementById("op").value;
    var bg = document.getElementById("body");

    switch (op) {
        case "vermelho":
        case "Vermelho":
        case "VERMELHO":
            bg.classList.remove("bgblue");
            bg.classList.remove("bgyellow");
            bg.classList.add("bgred");
            bg.classList.add("white");
            document.getElementById('result').innerText = "ESCOLHESSE VERMELHO!!";
            break;
        case "azul":
        case "Azul":
        case "AZUL":
            bg.classList.remove("bgred");
            bg.classList.remove("bgyellow");
            bg.classList.add("bgblue");
            bg.classList.add("white");
            document.getElementById('result').innerText = "ESCOLHESSE AZUL!!";
            break;
        case "amarelo":
        case "Amarelo":
        case "AMARELO":
            bg.classList.remove("bgblue");
            bg.classList.remove("bgred");
            bg.classList.remove("white");
            bg.classList.add("bgyellow");
            document.getElementById('result').innerText = "ESCOLHESSE AMARELO!!";
            break;
        default:
            bg.classList.remove("bgblue");
            bg.classList.remove("bgred");
            bg.classList.remove("bgyellow");
            bg.classList.add("white");
            bg.classList.add("bgblack");
            document.getElementById('result').innerText = "ESCOLHESSE ERRADO, AGORA ASSUMA AS CONSEQUÊNCIAS E NUNCA MAIS MUDE A COR!!!!!";
            document.getElementById("btnMudaCor").classList.add("_dn");
            break;

    }

    document.getElementById('result').innerText = situ;
}

function Lista() {
    var number = document.getElementById('number').value;
    var cont = 0;
    var lista = "";

    while (cont <= number){
        lista += cont + " ";
        cont++
    }

    document.getElementById('result').innerText = lista;
}

function Contador() {
    var cont = 0;
    var contador = "";

    while (cont <= 20) {
        contador += cont + "\n";
        cont++;
    }

    document.getElementById('result').innerText = contador;
}