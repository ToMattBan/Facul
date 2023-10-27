function CálculoIdade() {
	//Entrada
	var nome  =  document.getElementById('nome').value;
	var ano   =  parseInt(document.getElementById('ano').value);
	var data  =  new Date();
	var dia   =  data.getDate();
	var mes   =  data.getMonth();
	var anoat =  data.getFullYear();
	var hora  =  data.getHours();
	var min   =  data.getMinutes();
	var seg   =  data.getSeconds();
	
	//Processamento
	var idade = (anoat - ano);
	alert("Hoje, dia " + dia + "/" + (mes+1) +"/" + anoat + " as " + hora + ":" + min + ":" + seg +", você " + nome + ", está com " + (idade-1) + " ou " + (idade) + " anos, ou seja. Ficando com o pé na cova...")
	
	//Saída
	document.getElementById('idade').value = idade;
}