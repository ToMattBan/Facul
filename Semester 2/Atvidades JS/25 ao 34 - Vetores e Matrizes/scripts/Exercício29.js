var contaElementos = 0; // Inicializando variáveis que serão usadas em várias funções
var script = [];
var num = 0;
var result = 0;
var numDesejado = 0;

function adicionaNum() { // Esta função colocará na tela, a cada clique, um input para captar os números;
	contaElementos++;
	script[contaElementos] = '<div id=Campo' + contaElementos + ' class="_pvxxs">' +
		'<div class="o-layout__item metade _fz20">' +
		'Número ' + ("00" + contaElementos).slice(-2) + ' »<input id=Num' + contaElementos + ' class="input--numeros _tac" type="number">' +
		'</div>' +
		'</div>';

	document.getElementById('colocarElementos').innerHTML = script.join("");
};


function RemoverNum() {  // Esta função pegará o último input e o excluirá
	document.getElementById('Campo' + contaElementos).remove();
	script.splice(contaElementos, 1);
	contaElementos--
};

function MultiplicaNum() { // Esta função pegará todos os números digitados
	// Entrada
	var numeros = [];

	for (var y = 0; y <= contaElementos - 1; y++) { // Pegando todos os números
		numeros[y] = document.getElementById("Num" + (y + 1)).value;
	}

	// Processamento
	numDesejado = parseFloat(document.getElementById('NumDesejado').value);

	var tamanho = numeros.length - 1;
	for (x = 0; x <= tamanho; x++) { // Multiplicando todo o array
		num = parseFloat(numeros[x]);
		Multiplica();
		numeros[x] = numeros[x] + " * " + numDesejado + " = " + result + "\n";
	}

	// Saída
	document.getElementById('respostas').innerText = numeros.join("");
};

function Multiplica() { // Esta função multiplicará o número
	result = num * numDesejado;
}