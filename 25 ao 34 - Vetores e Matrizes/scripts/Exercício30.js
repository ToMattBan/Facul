var nums1 = [];
var nums2 = [];
var nums3 = [];
var op = "";

function Calcular() {
	for (var x = 1; x <= 5; x++) {
		nums1[x] = document.getElementById('Valor' + x + '1').value;
		nums2[x] = document.getElementById('Valor' + x + '2').value;
	}

	var semPreex = nums1.includes("");
	var semPreey = nums2.includes("");

	if (semPreex || semPreey) {
		alert("Favor preencher todos os campos!")
	} else {

		Operacao();

	}

	var results = "";
	for (var y = 1; y < nums3.length; y++) {
		results += nums1[y] + " " + op + " " + nums2[y] + " = " + nums3[y] + "\n"
	}

	document.getElementById('respostas').innerText = results;
}

function Operacao() {
	op = document.getElementById('OpDesejada').value;

	switch (op) {
		case "+":
			for (var y = 1; y < nums1.length; y++) {
				nums3[y] = parseFloat(nums1[y]) + parseFloat(nums2[y]);
			}
			break;
		case "-":
			for (var y = 1; y < nums1.length; y++) {
				nums3[y] = parseFloat(nums1[y]) - parseFloat(nums2[y]);
			}
			break;
		case "/":
			for (var y = 1; y < nums1.length; y++) {
				nums2[y] == 0 ? nums3[y] = "Impossível dividir por 0" : nums3[y] = parseFloat(nums1[y]) / parseFloat(nums2[y]);
			}
			break;
		case "*":
			for (var y = 1; y < nums1.length; y++) {
				nums3[y] = parseFloat(nums1[y]) * parseFloat(nums2[y]);
			}
			break;
		default:
			break;
	}
}

function InserirCampos() {
	var script = "";
	
	for (var cont = 1; cont <= 5; cont++) {
		script += '<div id=Campo class="_pvxxs o-layout__item metade">' +
			'<div class="o-layout__item metade _fz20">' +
			'Valor ' + cont + ' - 1 »<input id=Valor' + cont + '1 class="input--numeros _tac" type="number">' +
			'</div>' +
			'</div>' +
			'<div id=Campo class="_pvxxs o-layout__item metade">' +
			'<div class="o-layout__item metade _fz20">' +
			'Valor ' + cont + ' - 2 »<input id=Valor' + cont + '2 class="input--numeros _tac" type="number">' +
			'</div>' +
			'</div>';
	}

	document.getElementById('BtnAdd').classList.add("_dn");
	document.getElementById('Valores').innerHTML = script;
}