function Triângulo() {
	//Entrada
	var base = parseInt(document.getElementById('base').value);
	var altura = parseInt(document.getElementById('altura').value);
	
	//Processamento
	var area = ((base * altura) / 2);
		
	//Saída
	document.getElementById('area').value = area;
}