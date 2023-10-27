function Funcionario() {
	//Entrada
	var nome = document.getElementById('nome').value;
	var horas = parseInt(document.getElementById('horas').value);
	var dep = parseInt(document.getElementById('dep').value);
	
	//Processamento
	var salbruto = ((horas * 32) + (dep * 40));
	var desinss = salbruto * 0.085;
	var inss = salbruto - desinss;
	var desir = salbruto * 0.05;
	var ir = salbruto - desir;
	var salliq = (salbruto - desir - desinss);
		
	//Saída
	document.getElementById('salbruto').value = salbruto;
	document.getElementById('desinss').value = desinss;
	document.getElementById('desir').value = desir;
	document.getElementById('salliq').value = salliq;
}