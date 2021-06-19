function Aluno() {

	//Entrada
	var nome = parseInt(document.getElementById("nome").value);
	var nota1 = parseFloat(document.getElementById("nota1").value);
	var nota2 = parseFloat(document.getElementById("nota2").value);
	var nota3 = parseFloat(document.getElementById("nota3").value);
	var faltas = parseInt(document.getElementById("faltas").value);
	var situacao = ""

	//Processamento
		var media = (nota1 + nota2 + nota3)/3
	if (media >= 5){
		situacao = "Aprovado"
	}else{
		situacao = "Desaprovado por Média"
	}

	if (faltas > 28){
		situacao = "Desaprovado por Faltas"
	}

	if ((nota1 > 10) || (nota1 < 0) || (nota2 > 10) || (nota2 < 0) || (nota3 > 10) || (nota3 < 0)){
		alert("Insira uma nota válida")
		situacao = ""
	}

	//Saída
	document.getElementById("situacao").value = situacao;

}