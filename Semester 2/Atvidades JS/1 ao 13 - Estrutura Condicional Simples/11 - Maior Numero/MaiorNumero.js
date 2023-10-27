function MaiorNumero() {
	//Entrada
	var valor1 = parseInt(document.getElementById('num1').value);
	var valor2 = parseInt(document.getElementById('num2').value);
	var manum = ""

	//Processamento
	if (valor1 > valor2) {
		manum = valor1
	} else {
		if (valor2 > valor1) {
			manum = valor2
		} else {
			manum = "Os dois valores são iguais"
		}
	}

	//Saída
	document.getElementById('manum').value = manum;
}