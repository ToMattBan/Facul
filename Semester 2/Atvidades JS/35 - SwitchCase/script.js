function Calculadora() {
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var sinal = document.getElementById("sinal").value;
    var resultado = "";

    switch (sinal) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        case "/":
            if (valor2 != 0) {
                resultado = valor1 / valor2;
            } else {
                resultado = "Impossível dividir por 0"
            }
            break;
    }

    document.getElementById('resultado').innerText = "O resultado é » " + resultado;
}
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
function NextDay() {
    var data = new Date(document.getElementById('data').value)
    const dia = data.getUTCDate();
    var mes = data.getMonth();
    var nextDay = 0;

    switch (mes) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            switch (true) {
                case (dia < 31):
                    nextDay = dia + 1;
                    break;
                case 31:
                    nextDay = 1;
                    break;
            }
            break;
        case 3:
        case 5:
        case 8:
        case 10:
            switch (true) {
                case (dia < 30):
                    nextDay = dia + 1;
                    break;
                case 30:
                    nextDay = 1;
                    break;
            }
            break;
        case 1:
            switch (true) {
                case (dia < 28):
                    nextDay = dia + 1;
                    break;
                case 28:
                    nextDay = 1;
                    break;
            }
            break;
    }


    document.getElementById('nextDay').innerText = nextDay;
}
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
function Situacao() {
    var prova1 = parseFloat(document.getElementById('prova1').value);
    var prova2 = parseFloat(document.getElementById('prova2').value);
    var prova3 = parseFloat(document.getElementById('prova3').value);
    // var provas = [prova1, prova2, prova3];
    var exercicio1 = parseFloat(document.getElementById('exercicio1').value);
    var exercicio2 = parseFloat(document.getElementById('exercicio2').value);
    var mediaPr = 0;
    var mediaEx = 0;
    var mediaTotal = 0;
    var situacao = "";
    var maioresNotas = "";
    var notaMaior = 0;
    var notaMaior2 = 0;

    if ((prova1 > 10) || (prova1 < 0) || (prova2 > 10) || (prova2 < 0) || (prova3 > 10) || (prova3 < 0) || (exercicio1 > 10) || (exercicio1 < 0) || (exercicio2 > 10) || (exercicio2 < 0)) {
        alert("A média não pode ser maior que 10 ou menor que 0")
    } else {

        if ((prova1 > prova2) && (prova2 > prova3)) {
            maioresNotas = "prova1prova2";
            notaMaior = prova1;
            notaMaior2 = prova2;
        }
        if ((prova1 > prova3) && (prova3 > prova2)) {
            maioresNotas = "prova1prova3";
            notaMaior = prova1;
            notaMaior2 = prova3;
        }
        if ((prova2 > prova1) && (prova1 > prova3)) {
            maioresNotas = "prova1prova2";
            notaMaior = prova2;
            notaMaior2 = prova1;
        }
        if ((prova2 > prova3) && (prova3 > prova1)) {
            maioresNotas = "prova2prova3";
            notaMaior = prova2;
            notaMaior2 = prova3;
        }
        if ((prova3 > prova2) && (prova2 > prova1)) {
            maioresNotas = "prova2prova3";
            notaMaior = prova3;
            notaMaior2 = prova2;
        }
        if ((prova3 > prova1) && (prova1 > prova2)) {
            maioresNotas = "prova1prova3";
            notaMaior = prova3;
            notaMaior2 = prova1;
        }

        switch (maioresNotas) {
            case "prova1prova2":
                mediaPr = ((prova1 + provas2) / 2) * 0.7;
                break;
            case "prova1prova3":
                mediaPr = ((prova1 + prova3) / 2) * 0.7;
                break;
            case "prova2prova3":
                mediaPr = ((prova2 + prova3) / 2) * 0.7;
                break;
        }

        // provas.sort(function (a, b) {
        //     return a < b;
        // });

        // mediaPr = ((provas[0] + provas[1]) / 2) * 0.7;
        mediaEx = ((exercicio1 + exercicio2) / 2) * 0.3;

        mediaTotal = mediaEx + mediaPr

        if (mediaTotal >= 6) {
            situacao = "Aprovado";
        } else {
            situacao = "Reprovado";
        }

        document.getElementById('mprova').innerText = "A nota da maior prova foi » " + notaMaior;
        document.getElementById('mprova2').innerText = "A nota da segunda maior prova foi » " + notaMaior2;
        document.getElementById('situacao').innerText = "O aluno foi » " + situacao;
        document.getElementById('media').innerText = "A média final do aluno foi » " + mediaTotal.toFixed(2);
    }
}
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
function Fruta() {
    var fruta = document.getElementById('fruta').value;

    switch (fruta) {
        case "maçã":
            console.log("Não vendemos essa fruta aqui");
            alert("Olhe o console!!");
            break;
        case "kiwi":
            console.log("Estamos com escasses de kiwis");
            alert("Olhe o console!!");
            break;
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo");
            alert("Olhe o console!!");
            break;
        default:
            console.error("Beeeep, opção errada, tente novamente");
            alert("Olhe o console!!");
            break;
    }
}
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
function Carros() {
    // var carro = document.getElementById('carros');
    // var escolhido = carro.options[carro.selectedIndex].text;
    var escolhido = document.getElementById('carros').value;
    var mensagem = "";

    
    // switch (escolhido) {
        //     case "Hatch":
        //         mensagem = "Compra efetuada com sucesso";
    //         break;
    //     case "Sedan":
    //         mensagem = "Tem certeza que não prefere outro modelo?";
    //         break;
    //     case "Motocicleta":
    //         mensagem = "Tem certeza que não prefere outro modelo?";
    //         break;
    //     case "Caminhonete":
    //         mensagem = "Tem certeza que não prefere outro modelo?";
    //         break;
    //     default:
    //         console.log("Não trabalhamos com este tipo de automóvel aqui")
    //         alert("Olhe o console!!");
    //         break;
    // }
    
    switch (escolhido) {
        case "Hatch":
            mensagem = "Compra efetuada com sucesso";
            break;
        case "Sedan":
            mensagem = "Tem certeza que não prefere outro modelo?";
            break;
        case "Motocicleta":
            mensagem = "Tem certeza que não prefere outro modelo?";
            break;
        case "Caminhonete":
            mensagem = "Tem certeza que não prefere outro modelo?";
            break;
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui")
            alert("Olhe o console!!");
            break;
    }
    document.getElementById('vendedorsay').innerText = mensagem;
}