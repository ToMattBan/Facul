function TrêsNúmeros() {
	//Entrada
	var valor1 = parseInt(document.getElementById('valor1').value);
	var valor2 = parseInt(document.getElementById('valor2').value);
	var valor3 = parseInt(document.getElementById('valor3').value);
	
	//Processamento
	var conta1 = (valor1 + valor2)
	var conta2 = (valor2 - valor1)
	var conta3 = (valor3 * valor1)
	var conta4 = (valor3 + valor2)
	var conta5 = (valor3 - valor2)
	var conta6 = (valor1 + valor2 + valor3)
	
	//Saída
	document.getElementById('conta1').value = conta1;
	document.getElementById('conta2').value = conta2;
	document.getElementById('conta3').value = conta3;
	document.getElementById('conta4').value = conta4;
	document.getElementById('conta5').value = conta5;
	document.getElementById('conta6').value = conta6;
}