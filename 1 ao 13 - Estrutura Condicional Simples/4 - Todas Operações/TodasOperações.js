function Operacoes() {
	//Entrada
	var valor1 = parseInt(document.getElementById('valor1').value);
	var valor2 = parseInt(document.getElementById('valor2').value);
	
	//Processamento
	var soma = (valor1 + valor2)
	var sub = (valor1 - valor2)
	var mult = (valor1 * valor2)
	{  if (valor2 != 0)
	var div = valor1 / valor2;
	else 
	var div = "Seu cabeção! O divisor não pode ser » 0 «"
	}
	
	//Saída
	document.getElementById('soma').value = soma;
	document.getElementById('subtração').value = sub;
	document.getElementById('multiplicação').value = mult;
	document.getElementById('divisão').value = div.toFixed(2);
}