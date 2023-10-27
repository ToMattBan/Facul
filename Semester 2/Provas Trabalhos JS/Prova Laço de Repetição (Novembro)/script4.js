function Juros() {
  //Entrada
  var salCarlos = parseInt(document.getElementById('salCarlos').value);
  var salJoão = (salCarlos / 3);
  var rendimentoCarlos = 1.02;
  var rendimentoJoão = 1.05;
  var totalCarlos = 0;
  var totalJoão = 0;

  //Processamento
  for (var meses = 0; totalJoão <= totalCarlos; meses++){
    totalCarlos = totalCarlos + ((totalCarlos + salCarlos) * rendimentoCarlos)
    totalJoão = totalJoão + ((totalJoão + salJoão) * rendimentoJoão)
  }

  //Saída
  document.getElementById('meses').innerText = "Para que João iguale o rendimento de Carlos, deverão se passar " +  meses + " meses.";
};