function MaioreMenorNumero() {
	//Entrada
	var valor1 = parseInt(document.getElementById('num1').value);
	var valor2 = parseInt(document.getElementById('num2').value);
	var valor3 = parseInt(document.getElementById('num3').value);
	var manum = ""
	var menum = ""

	//Processamento
	if ((valor1 > valor2) && (valor1 > valor3)) {
		manum = valor1
	} else {
		if ((valor2 > valor1) && (valor2 > valor3)) {
			manum = valor2
		} else {
			if ((valor3 > valor1) && (valor3 > valor2)) {
				manum = valor3
			} else {
				manum = "Os três valores são iguais"
			}
		}
	}

	if ((valor1 < valor2) && (valor1 < valor3)) {
		menum = valor1
	} else {
		if ((valor2 < valor1) && (valor2 < valor3)) {
			menum = valor2
		} else {
			if ((valor3 < valor1) && (valor3 < valor2)) {
				menum = valor3
			} else {
				menum = "Os três valores são iguais"
			}
		}
	}

	//Saída
	document.getElementById('manum').value = manum;
	document.getElementById('menum').value = menum;
}