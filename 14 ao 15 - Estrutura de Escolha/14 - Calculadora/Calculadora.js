function Calculadora() {

	//Entrada
	var valor1 = parseInt(document.getElementById("valor1").value);
	var valor2 = parseInt(document.getElementById("valor2").value);
	var op = (document.getElementById("op").value);

	//Processamento
	switch (op) {

		case "1":
			var resultado = valor1 + valor2
			break;
		case "2":
			var resultado = valor1 - valor2
			break;
		case "3":
			var resultado = valor1 * valor2
			break;
		case "4":
			if (valor2 != 0) {
				var resultado = valor1 / valor2
			} else {
				alert("Impossível dividir por 0")
				var resultado = "Impossível dividir por 0"
			}
			break;
	}

	//Saída
	document.getElementById("resultado").value = resultado;

}