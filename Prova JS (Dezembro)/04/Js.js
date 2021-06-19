function Soma() {
	var numerozitos = [20, 68, 45, 69, 75, 32, 68, 54, 12, 59, 68, 41, 20, 53, 69, 85, 41, 02, 35, 78];
	var menorvalor = 99999;
	var soma = 0;

	for (var x = 0; x < numerozitos.length; x ++){
		if (numerozitos[x] < menorvalor){
			menorvalor = numerozitos[x];
		}
	}

	for (var x = 0; x < numerozitos.length; x ++){
		numerozitos[x] == menorvalor ? soma = soma : soma+= numerozitos[x];
	}

	document.getElementById('respostas').innerText = "A soma dos valores, com exceção do menor é » " + soma;
}