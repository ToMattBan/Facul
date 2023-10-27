var contaElementos = 0; // Inicializando variáveis que serão usadas em várias funções
var script = [];
var idd = [];
var maIdd = 0;
var pMaIdd = "";
var meIdd = 0;
var pMeIdd = "";

function adicionaIdd() { // Esta função colocará na tela, a cada clique, um input para captar as idades;
	contaElementos++;
	script[contaElementos] = '<div id=Campo' + contaElementos + ' class="_pvxxs">' +
		'<div class="o-layout__item metade _fz20">' +
		'Idade ' + ("00" + contaElementos).slice(-2) + ' »<input id=Idade' + contaElementos + ' class="input--numeros _tac" type="number">' +
		'</div>' +
		'</div>';

	document.getElementById('colocarElementos').innerHTML = script.join("");
};

function RemoverIdd() {  // Esta função pegará o último input e o excluirá
	document.getElementById('Campo' + contaElementos).remove();
	script.splice(contaElementos, 1);
	contaElementos--
};

function CaptarIdd() { // Função para captar os números e inserí-los em um vetor
	for (var cont = 0; cont < contaElementos; cont++) {
		idd[cont] = document.getElementById('Idade' + (cont + 1)).value;
	}

	idd.includes("") ? alert("Favor preencher todos os campos!") : MaMeIdd();

	document.getElementById('respostas').innerText = "O mais velho tem " + maIdd + " anos e está na posição " + pMaIdd + " do vetor\n" +
													 "O mais novo tem " + meIdd + " anos e está na posição " + pMeIdd + " do vetor";
};

function MaMeIdd() { // Esta função verá o maior e o menor número do vetor e suas posições
	for (var y = 0; y < idd.length; y++) {
		if (maIdd == 0) {
			maIdd = idd[y]
			pMaIdd = idd.indexOf(maIdd);
		} else {
			if (parseInt(idd[y]) > maIdd) {
				maIdd = idd[y]
				pMaIdd = idd.indexOf(maIdd);
			}
		}

		if (meIdd == 0) {
			meIdd = idd[y]
			pMeIdd = idd.indexOf(meIdd);
		} else {
			if (parseInt(idd[y]) < meIdd) {
				meIdd = idd[y]
				pMeIdd = idd.indexOf(meIdd);
			}
		}
	}
};