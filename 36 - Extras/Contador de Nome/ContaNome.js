function ContaNome(){

	//Entrada
	var nome = (document.getElementById("nome").value);
	const espacos = (nome.split(" ").length - 1);
	var resposta = (nome.length - espacos);
	var resposta2 = "";

	//Processamento
	if ((resposta > 1) && (resposta <= 10)) {
		resposta2 = "Nome pequeno"
	} 
	if ((resposta >= 11) && (resposta <=20)) {
		resposta2 = "Nome médio"
	}
		if ((resposta >= 21) && (resposta <= 40)) {
		resposta2 = "Nome grande"
	}
		if (resposta > 40) {
		resposta2 = "Nome muito grande"
	}

	//Saída
	document.getElementById("resposta").value = resposta;
	document.getElementById("resposta2").value = resposta2;

}