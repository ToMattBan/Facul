function Cidades() {
	//Entrada
	var cidade1 = document.getElementById('cid1').value;
	var habitantes1 = parseInt(document.getElementById('hab1').value);
	var imposto1 = parseInt(document.getElementById('imp1').value);
	var cidade2 = document.getElementById('cid2').value;
	var habitantes2 = parseInt(document.getElementById('hab2').value);
	var imposto2 = parseInt(document.getElementById('imp2').value);
	var mahab = ""
	var maimp = ""

	//Processamento
	if (habitantes1 > habitantes2) {
		mahab = cidade1
	} else {
		if (habitantes2 > habitantes1) {
			mahab = cidade2
		} else {
			mahab = "As duas cidades tem a mesma quantidade"
		}
	}

	if (imposto1 > imposto2) {
		maimp = cidade1
	} else {
		if (imposto2 > imposto1) {
			maimp = cidade2
		} else {
			maimp = "As duas cidades tem a mesma arrecadação"
		}
	}

	//Saída
	document.getElementById('mahab').value = mahab;
	document.getElementById('maimp').value = maimp;
}