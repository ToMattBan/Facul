var contaElementos = 0; // Inicializando variáveis que serão usadas em várias funções
var script = [];


function adicionaNome() { // Esta função colocará na tela, a cada clique, um input para captar nomes;
	contaElementos++;
	script[contaElementos] = '<div id=Campo' + contaElementos + ' class="_pvxxs">' +
		'<div class="o-layout__item metade _fz20">' +
		'Nome ' + ("00" + contaElementos).slice(-2) + ' »<input id=Nome' + contaElementos + ' class="input--nomes _tac" type="text">' +
		'</div>' +
		'</div>';

	document.getElementById('colocarElementos').innerHTML = script.join("");
};


function RemoverNome() {  // Esta função pegará o último input e o excluirá
	document.getElementById('Campo' + contaElementos).remove();
	script.splice(contaElementos, 1);
	contaElementos--
};


function ProcuraNome() { // Esta função pegará todos os nomes digitados e verá se há entre eles o nome desejado
	//Entrada
	var nomes = [];
	var nomeDesejado = document.getElementById('NomeDesejado').value;

	//Processamento
	if (nomeDesejado == "") { // Vendo se preencheu o nome desejado
		alert("Por favor insira o nome desejado")
	} else {

		for (var cont = 1; cont <= contaElementos; cont++) { // Pegando todos os nomes
			var nome = document.getElementById("Nome" + cont).value;
			nomes[cont] = nome;
		}

		var semNome = nomes.includes(""); // Vendo se preencheu todos os campos de nome

		if (semNome) {
			alert("Favor preencher todos os campos de nome")
		} else {

			var ifNome = nomes.includes(nomeDesejado); // Fazendo a verificação para ver se o nome desejado se encontra na lista

			if (ifNome) {
				var result = "O nome desejado se encontra na lista"
			} else { var result = "O nome desejado não se encontra na lista" }

			//Saída
			document.getElementById('respostas').innerText = result;
		}
	}
};