function Multiplicacao() {
	//Entrada
	var valor1 = parseInt(document.getElementById('valor1').value);
	var valor2 = parseInt(document.getElementById('valor2').value);

	//Processamento
	var resultado = valor1 * valor2;

	//Saída
	document.getElementById('resultado').value = resultado;
}