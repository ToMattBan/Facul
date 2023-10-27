var Porcentagem = function() {
	//Entrada
	var sal = parseFloat(document.getElementById('sal').value);
	
	//Processamento
	var novosal = sal * 15.8 / 100 + sal;
		
	//Saída
	document.getElementById('novosal').value = novosal.toFixed(2);
}