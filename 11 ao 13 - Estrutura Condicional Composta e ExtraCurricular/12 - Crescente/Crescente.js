function Crescente() {

	//Entrada
	var valor1 = parseInt(document.getElementById("valor1").value);
	var valor2 = parseInt(document.getElementById("valor2").value);
	var valor3 = parseInt(document.getElementById("valor3").value);
	var resultado = ""

	//Processamento
	if ((valor1 > valor2) && (valor2 > valor3)) {
		resultado = valor3 + " - " + valor2 + " - " + valor1;
	} else {
		if ((valor1 > valor3) && (valor3 > valor2)) {
			resultado = valor2 + " - " + valor3 + " - " + valor1;
		} else {
			if ((valor2 > valor3) && (valor3 > valor1)) {
				resultado = valor1 + " - " + valor3 + " - " + valor2;
			} else {
				if ((valor2 > valor1) && (valor1 > valor3)) {
					resultado = valor3 + " - " + valor1 + " - " + valor2;
				} else {
					if ((valor3 > valor2) && (valor2 > valor1)) {
						resultado = valor1 + " - " + valor2 + " - " + valor3;
					} else resultado = valor2 + " - " + valor1 + " - " + valor3;
				}
			}
		}
	}

	//Saída
	document.getElementById("resultado").value = resultado;

}
