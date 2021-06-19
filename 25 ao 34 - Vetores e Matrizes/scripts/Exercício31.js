var contaElementos = 0; // Inicializando variáveis que serão usadas em várias funções
var script = [];
var num = [];
var numInv = [];
var numCresc = [];

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

function CaptarNum() { // Função para captar os números e inserí-los em um vetor
	for (var cont = 0; cont < contaElementos; cont++) {
		num[cont] = document.getElementById('Num' + (cont + 1)).value;
	}

	num.includes("") ? alert("Favor preencher todos os campos!") : OrdenaVetor();

	document.getElementById('respostas').innerText = "Ordem Inversa » " + numInv.join(", ") + 
												  "\n Ordem Crescente » " + numCresc.join(", ");
};

function OrdenaVetor() { // Esta função ordenará o vetor
	for (var y = 0; y < num.length; y++) {
		numInv[num.length - (y + 1)] = num[y];
	}

	numCresc = num;

	numCresc.sort(function (a,b){
		return a-b;
	})
};