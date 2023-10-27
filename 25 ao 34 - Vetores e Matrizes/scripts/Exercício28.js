function ComparaTemperatura() {
	// Entrada
	var temperaturas = [], dias = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
	var maTemp = "", maDia = "", meTemp = "", meDia = "";
	var mediaTemp = 0;

	// Processamento
	for (var x = 1; x <= dias.length; x++) { // Armazenando as temperaturas
		temperaturas[x] = document.getElementById("Dia" + x).value;
		mediaTemp += parseFloat(temperaturas[x]);

		if (maTemp == "") { // Caso maTemp estiver vazia, receberá o primeiro dia 
			maTemp = temperaturas[x];
			maDia = dias[x-1];
		} else {
			if (temperaturas[x] > maTemp) { // Vendo a maior temperatura
				maTemp = temperaturas[x];
				maDia = dias[x-1];
			}
		}

		if (meTemp == "") { // Caso meTemp estiver vazia, receberá o primeiro dia 
			meTemp = temperaturas[x];
			meDia = dias[x-1];
		} else {
			if (temperaturas[x] < meTemp) { // Vendo a menor temperatura
				meTemp = temperaturas[x];
				meDia = dias[x-1];
			}
		}

	}

	if (maDia == "Sábado" || maDia == "Domingo") { // Estética
		maDia = "no " + maDia;
	} else {
		maDia = "na " + maDia;
	}
	if (meDia == "Sábado" || meDia == "Domingo") { // Estética
		meDia = "no " + meDia;
	} else {
		meDia = "na " + meDia;
	}

	mediaTemp = mediaTemp / dias.length; // Fazendo a média da temperatura

	var diasAbaixo = "";
	for (x = 1; x <= dias.length; x++) { // Vendo quais foram os dias que ficaram abaixo da média
		if (temperaturas[x] < mediaTemp) {
			diasAbaixo += dias[x-1] + "\n"
		}
	}

	//Saída 
	document.getElementById('respostas').innerText =
		"A maior temperatura foi » " + maTemp + "ºC registrada " + maDia + "\n" +
		"A menor temperatura foi » " + meTemp + "ºC registrada " + meDia + "\n" +
		"A média de temperatura foi » " + mediaTemp.toFixed(2) + "ºC \n\n" +
		"Os dias que ficaram abaixo da média foram » \n" + diasAbaixo;
}