function Divisao() {
//Entrada
	var valor1 = parseInt(document.getElementById('valor1').value);
	var valor2 = parseInt(document.getElementById('valor2').value);

	//Processamento
	{  if (valor2 != 0)
	var resultado = valor1 / valor2;
	else 
    alert("O divisor não pode ser » 0 «")
	}
	//Saída
	document.getElementById('resultado').value = resultado.toFixed(2);
}