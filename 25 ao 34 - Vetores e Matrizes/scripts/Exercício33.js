function Converter() {
	var numVdd = document.getElementById('decimal').value;
	var num = numVdd;

	var roman = {
		"<span class=_tdo>M</span>": 1000000,
		"<span class=_tdo>CM</span>": 900000,
		"<span class=_tdo>D</span>": 500000,
		"<span class=_tdo>CD</span>": 400000,
		"<span class=_tdo>C</span>": 100000,
		"<span class=_tdo>XC</span>": 90000,
		"<span class=_tdo>L</span>": 50000,
		"<span class=_tdo>XL</span>": 40000,
		"<span class=_tdo>X</span>": 10000,
		"<span class=_tdo>IX</span>": 9000,
		"<span class=_tdo>V</span>": 5000,
		"M": 1000,
		"CM": 900,
		"D": 500,
		"CD": 400,
		"C": 100,
		"XC": 90,
		"L": 50,
		"XL": 40,
		"X": 10,
		"IX": 9,
		"V": 5,
		"IV": 4,
		"I": 1
	};

	var str = '';

	for (var i of Object.keys(roman)) {
		var q = Math.floor(num / roman[i]);
		num -= q * roman[i];
		str += i.repeat(q);
	}



	document.getElementById('respostas').innerHTML = str;
	document.getElementById('provaReal').innerHTML = "<a href=" + "http://www.profcardy.com/cardicas/romano.php?arabico=" + numVdd + "> Prova Real </a>";

}