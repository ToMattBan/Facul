function Dias() {

	//Entrada
	var op = (document.getElementById("op").value);

	//Processamento
	switch (op) {

		case "1":
		case "8":
		case "15":
		case "22":
		case "29":
			var resposta = "Hoje é dia" + op + " de Outubro, Segunda-feira"
			break;
		case "2":
		case "9":
		case "16":
		case "23":
		case "30":
			var resposta = "Hoje é dia" + op + " de Outubro, Terça-feira"
			break;
		case "3":
		case "10":
		case "17":
		case "24":
		case "31":
			var resposta = "Hoje é dia" + op + " de Outubro, Quarta-feira"
			break;
		case "4":
		case "11":
		case "18":
		case "25":
			var resposta = "Hoje é dia " + op + " de Outubro, Quinta-feira"
			break;
		case "5":
		case "12":
		case "19":
		case "26":
			var resposta = "Hoje é dia " + op + " de Outubro, Sexta-feira"
			break;
		case "6":
		case "13":
		case "20":
		case "27":
			var resposta = "Hoje é dia " + op + " de Outubro, Sábado"
			break;
		case "7":
		case "14":
		case "21":
		case "28":
			var resposta = "Hoje é dia " + op + " de Outubro, Domingo"
			break;
		default:
			var resposta = "Dia Inválido"
			alert("Dia Inválido");
			break;
	}

	//Saída
	document.getElementById("resposta").value = resposta;

}