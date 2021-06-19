function Media() {
	//Entrada
	var valor1 = parseFloat(document.getElementById('valor1').value);
	var valor2 = parseFloat(document.getElementById('valor2').value);
	var valor3 = parseFloat(document.getElementById('valor3').value);
	var nome = document.getElementById('nome').value;

	//Processamento
	var resultado = ((valor1 + valor2 + valor3) / 3)
	
	{ if (resultado >= 6) 
	 alert("• "+nome+" foi aprovado com a média " +resultado)
             else
	     if (resultado < 6)
	     alert("• "+nome+" foi reprovado " +resultado)
	}
	//Saída
	document.getElementById('resultado').value = resultado.tofixed(2);
}