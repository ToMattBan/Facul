function Futebol() {
	//Entrada
	var time1 = document.getElementById('time1').value;
	var gols1 = parseInt(document.getElementById('gols1').value);
	var time2 = document.getElementById('time2').value;
	var gols2 = parseInt(document.getElementById('gols2').value);
	var venc = ""

	//Processamento
	if (gols1 > gols2) {
		venc = time1
	} else {
		if (gols2 > gols1) {
			venc = time2
		} else {
			venc = "Empate"
		}
	}

	//Saída
	document.getElementById('venc').value = venc;
}