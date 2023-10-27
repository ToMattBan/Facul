function ParImpar() {

	//Entrada
	var valor1 = parseInt(document.getElementById("valor1").value);
	
	//Processamento
	if (valor1 % 2) {
		var resultado = "ÍMPAR"
	}else{
		var resultado = "PAR"
	}

	//Saída
	document.getElementById("resultado").value = resultado;

}