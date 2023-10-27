function Multiplica() {
	var valor1 = parseInt(document.getElementById('valor1').value);
	var valor2 = parseInt(document.getElementById('valor2').value);

	var resultado = valor1 * valor2;

	document.getElementById('resultado').innerText = "A soma é » " + resultado;
}

function MaiorNumero() {
	var valor1 = parseInt(document.getElementById('valor1').value);
	var valor2 = parseInt(document.getElementById('valor2').value);
	var valor3 = parseInt(document.getElementById('valor3').value);
	numeros = new Array(valor1, valor2, valor3);

	numeros.sort(function (a, b) {
		return a < b;
	});

	var resultado = numeros[0];

	document.getElementById('resultado').innerText = "O maior número é » " + resultado;
}

function Tabuada() {
	var valor1 = parseInt(document.getElementById('valor1').value);

	var x1 = valor1 * 1;
	var x2 = valor1 * 2;
	var x3 = valor1 * 3;
	var x4 = valor1 * 4;
	var x5 = valor1 * 5;
	var x6 = valor1 * 6;
	var x7 = valor1 * 7;
	var x8 = valor1 * 8;
	var x9 = valor1 * 9;
	var x10 = valor1 * 10;

	document.getElementById('resultado1').innerText = valor1 + " vezes 1 é » " + x1;
	document.getElementById('resultado2').innerText = valor1 + " vezes 2 é » " + x2;
	document.getElementById('resultado3').innerText = valor1 + " vezes 3 é » " + x3;
	document.getElementById('resultado4').innerText = valor1 + " vezes 4 é » " + x4;
	document.getElementById('resultado5').innerText = valor1 + " vezes 5 é » " + x5;
	document.getElementById('resultado6').innerText = valor1 + " vezes 6 é » " + x6;
	document.getElementById('resultado7').innerText = valor1 + " vezes 7 é » " + x7;
	document.getElementById('resultado8').innerText = valor1 + " vezes 8 é » " + x8;
	document.getElementById('resultado9').innerText = valor1 + " vezes 9 é » " + x9;
	document.getElementById('resultado10').innerText = valor1 + " vezes 10 é » " + x10;
}

function Quadrado() {
	var valor1 = parseInt(document.getElementById('valor1').value);

	var resultado = valor1 * valor1;

	document.getElementById('resultado').innerText = "O quadrado de " + valor1 + " é » " + resultado;
}

function Kilometragem() {
	var gasosa = parseInt(document.getElementById('gasosa').value);
	var kms = parseInt(document.getElementById('kms').value);

	var resultado = kms / gasosa;

	document.getElementById('resultado').innerText = "Seu carro faz » " + resultado + " Km/l «";
}

function Soma() {
	var valor1 = parseInt(document.getElementById('valor1').value);
	var valor2 = parseInt(document.getElementById('valor2').value);

	var conta = valor1 + valor2;

	if (conta >= 20) {
		resultado = conta;
	} else {
		resultado = "Soma inferior a 20";
	}

	document.getElementById('resultado').innerText = "Resultado » " + resultado;
}

function Media() {
	var nota1 = parseInt(document.getElementById('nota1').value);
	var nota2 = parseInt(document.getElementById('nota2').value);
	var nota3 = parseInt(document.getElementById('nota3').value);
	var nota4 = parseInt(document.getElementById('nota4').value);
	var situacao;

	var media = (nota1 + nota2 + nota3 + nota4) / 4;

	if (media >= 8) {
		situacao = "Aprovado!"
	} else {
		situacao = "Reporovado"
	}

	document.getElementById('resultado').innerText = "O aluno está » " + situacao + " « com a média » " + media;
}

function ValidacaoSenha() {
	var Senha1 = parseInt(document.getElementById('Senha1').value);
	var Senha2 = parseInt(document.getElementById('Senha2').value);

	if (Senha1 == Senha2) {
		window.location.replace("https://www.cia.gov/index.html");
	} else {
		var resultado = "As senhas não conferem!"
	}

	document.getElementById('resultado').innerText = resultado;
}

function Situacao() {
	var nota1 = parseInt(document.getElementById('nota1').value);
	var nota2 = parseInt(document.getElementById('nota2').value);
	var nota3 = parseInt(document.getElementById('nota3').value);
	var situacao;

	var media = (nota1 + nota2 + nota3) / 3;

	if (media >= 6) {
		situacao = "Aprovado!"
	}
	if (media <= 5) {
		situacao = "Reprovado"
	}
	if ((media > 5) && (media < 6)) {
		situacao = "Em recuperação"
	}

	document.getElementById('resultado').innerText = "O aluno está » " + situacao;
}

function SomaMaiores() {
	var valor1 = parseInt(document.getElementById('valor1').value)
	var valor2 = parseInt(document.getElementById('valor2').value)
	var valor3 = parseInt(document.getElementById('valor3').value)
	numeros = new Array(valor1, valor2, valor3)

	numeros.sort(function (a, b) {
		return a < b;
	});

	var soma = (numeros[0]) + (numeros[1]);

	document.getElementById('resultado').innerText = soma;
}