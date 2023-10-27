function SomarMatriz() {
	var matriz1 = [ [5, 4],
					[0, 2],
					[1, -1] ];

	var matriz2 = [ [0, -2],
					[5, -3],
					[-1, 0] ];

	var respostas = [ [],
					  [],
					  [] ];

					  
	for (var x = 0; x < (matriz2.length); x++) {
		for (var y = 0; y < matriz2[0].length; y++) {
			respostas[x][y] = parseInt(matriz1[x][y]) + parseInt(matriz2[x][y]);
		}
	}

	console.log(respostas);
	for (var i = 0; i < respostas.length; i++) {
		document.getElementById('respostas' + (i + 1) + '').innerText = respostas[i][0] + ", " + respostas[i][1] + "\n";
	}
}