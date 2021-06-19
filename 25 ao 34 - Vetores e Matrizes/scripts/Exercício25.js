var contaElementos = 0; // Inicializando variáveis que serão usadas em várias funções
var script = ""; 


function colocarAlunos() { // Esta função criará um laço de repetição para adicionar um número especificado de alunos
	var elementos;

	for (var contaElemento = 1; contaElemento <= 5; contaElemento++) { //Aqui definimos quantos alunos terá
		adicionaElemento();	//Aqui chamammos a função que adiciona os alunos
		elementos = script;
	}

	document.getElementById('colocarElementos').innerHTML = elementos; //Aqui imprimimos os inputs na tela
	document.getElementById('btnColoca').classList.add("_dn"); // Escondendo o botão de adicionar mais alunos
};


function adicionaElemento() { // Nesta função definimos os inputs que serão colocados na tela
	contaElementos++;
	script += '<div id=Aluno' + contaElementos + ' class="_pvxxs">' +
		'<div class="o-layout__item metade _fz20">' +
		'Aluno ' + ("00" + contaElementos).slice(-2) + ' »<input id=Nome' + contaElementos + ' class="input--nomes _tac" type="text">' +
		'</div>' +
		'<div class="o-layout__item metade _fz20">' +
		'Media »<input id=Nota' + contaElementos + ' class="input--numeros _tac" type="number" min="0" max="10">' +
		'</div>' +
		'</div>';
};


function Media() { // Esta função faz o cálculo da média e mais outras coisas
	// Entrada
	var nomes = []; // Criando arrays para armazenar as informações;
	var medias = [];

	for (var x = 1; x <= contaElementos; x++) { // Pegando os nomes de todos os alunos e suas respectivas médias
		var nomesX = document.getElementById("Nome" + x).value;
		nomes[x] = nomesX;
		var mediasX = document.getElementById("Nota" + x).value;
		medias[x] = parseFloat(mediasX);
	}

	// Processamento
	var preenchErradoo = nomes.includes("") || medias.includes(""); // Verificar se todos os campos foram preenchidos
	if (preenchErradoo) {
		alert("Favor preencher todos os campos!")
	} else {
		for (x = 0; x < medias.length; x++) {// Verificar se todas as notas ficaram entre 0 e 10
			if (medias[x] > 10 || medias[x] < 0) {
				alert("Média do aluno " + nomes[x] + " foi inserida incorretamente, favor revisá-la");
				var mediaErrada = true;
				break;
			}
		}

		if (mediaErrada) { } else {

			var situacao = []; // Criando varíaveis aqui para que não crie sem necessidade
			var conc = ""; // Variável para a conslusão

			for (cont = 1; cont < medias.length; cont++) { // Verificar situação
				if (medias[cont] >= 7) {
					situacao[cont] = "aprovado";
				} else {
					situacao[cont] = "reprovado";
				}
				conc += "O aluno " + nomes[cont] + " alcançou a média " + medias[cont] + " e foi " + situacao[cont] + ";" + "</br>";
			};

			// Saída
			document.getElementById("respostas").innerHTML = conc;
		}
	}
};