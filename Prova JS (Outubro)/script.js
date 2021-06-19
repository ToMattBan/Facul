function Soma() {
    var value1 = parseInt(document.getElementById("value1").value);
    var value2 = parseInt(document.getElementById("value2").value);
    var txresult = "";

    var result = value1 + value2;

    if (result > 100) {
        txresult = "O restultado »" + result + "« é maior que 100!";
    }

    if (result < 100) {
        txresult = "O restultado »" + result + "« é menor que 100!";
    }

    if (result == 100) {
        txresult = "O restultado é igual a 100!";
    }

    document.getElementById('txresult').innerText = txresult;
}

function Bigger() {
    var value1 = parseInt(document.getElementById("value1").value);
    var value2 = parseInt(document.getElementById("value2").value);
    var bigger = "";

    if (value1 > value2) {
        bigger = "O maior número é » " + value1;
    } else {
        if (value1 < value2) {
            bigger = "O maior número é » " + value2;
        } else {
            bigger = "Ambos os valores são iguais!";
        }
    }

    document.getElementById("bigger").innerText = bigger;
}

function Quadrado() {
    var number = parseInt(document.getElementById("number").value);
    var result;

    result = (number ** 2) + 2;

    document.getElementById("result").innerText = "O número que desejas é » " + result;
}

function Consumo() {
    var car = document.getElementById("car").value;
    var gas = parseInt(document.getElementById("gas").value);
    var km = parseInt(document.getElementById("km").value);

    var cons = gas / km;

    document.getElementById("cons").innerText = "Seu carro de modelo " + car + " consome " + (cons.toFixed(2)) + "L/km!";
}

function Mult() {
    var value1 = parseInt(document.getElementById("value1").value);
    var value2 = parseInt(document.getElementById("value2").value);
    var value3 = parseInt(document.getElementById("value3").value);

    var result = value1 * value2 * value3;

    if (result > 10) {
        document.getElementById("result").innerText = "O resultado é » " + result;
    }
}

function Media() {
    var note1 = parseFloat(document.getElementById("note1").value);
    var note2 = parseFloat(document.getElementById("note2").value);
    var note3 = parseFloat(document.getElementById("note3").value);
    var note4 = parseFloat(document.getElementById("note4").value);

    var media = (note1 + note2 + note3 + note4) / 4;

    if (media > 7) {
        var situation = "Aluno aprovado com a média » " + media;
    } else {
        if (media < 6) {
            var situation = "Aluno reprovado com a média » " + media;
        } else {
            var situation = "Aluno em recuperação com a média » " + media;
        }
    }

    document.getElementById("situation").innerText = situation;
}

function SomaMaiores(){
    var value1 = parseInt(document.getElementById("value1").value);
    var value2 = parseInt(document.getElementById("value2").value);
    var value3 = parseInt(document.getElementById("value3").value);
    var soma;

    if ((value1 > value3) && (value2 > value3)){
        soma = value1 + value2;
    }

    if ((value1 > value2) && (value3 > value2)){
        soma = value1 + value3;
    }

    if ((value2 > value3) && (value1 > value3)){
        soma = value1 + value2;
    }

    if ((value2 > value1) && (value3 > value1)){
        soma = value3 + value2;
    }

    if ((value3 > value1) && (value2 > value1)){
        soma = value3 + value2;
    }

    if ((value3 > value2) && (value1 > value1)){
        soma = value1 + value3;
    }

    document.getElementById("result").innerText = "O resultado da soma dos dois maiores é » " + soma;
}

function IMC(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    var imc = peso / (altura * altura);

    document.getElementById("imc").innerText = "Seu IMC é » " + (imc.toFixed(2));
}