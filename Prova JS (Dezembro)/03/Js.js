function CalcAcrescimo(){
	var valorAntigo = document.getElementById('valor_antigo').value;
	var valorNovo = document.getElementById('valor_novo').value;

	var acr = (100 * valorNovo - 100 * valorAntigo) / valorAntigo;

	document.getElementById('respostas').innerText = "Houve um acréscimo de " + acr + "%";
}