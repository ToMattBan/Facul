function ContaDivida() {
  //Entrada
  var valDivida = parseFloat(document.getElementById('valDivida').value); //Pegando o valor da dívida
  var valDiv = parseFloat(valDivida); // Definindo uma variável como o valor da dívida, utilizaremos ela para não modificar a original
  var Jur = 0.0 // Defino o valor inicial dos Juros como 0
  var result = [20]; // Faço um array para armazenar todas minhas respostas
  var nParc = 1; // Defino uma variável para contar os nº de parcelas
  var ValJur = 0; // Essa variável armazenará o valor a ser pago de juros

  //Processamento
  for (var x = 0; x <= 20; x += 4) { // Esse for serve para saber se todos os itens do array fora completados;
    valDiv = parseFloat(valDivida); // Seto a variavel que usaremos como o valor inicial da dívida, resetando ela aqui para recalcular.

    ValJur = (valDivida * Jur).toFixed(2); // Descubro o valor de Juros multiplicando a taxa de juros pelo valor da dívida, e seto para ter apenas duas casas decimais
    result[x] = ValJur; // Guardo o resultado no array

    result[x + 1] = nParc; // Guardo o nº de parcelas no array

    valDiv = (parseFloat(valDiv) + ValJur / 1).toFixed(2); // Para saber o valor da dívida, somo o valor inicial devido aos juros. (O /1 está aí pois o toFixed não estava aceitando a conta sozinha)
    result[x + 2] = valDiv; // Guardo o valor total da dívida no array

    ValParc = (valDiv / nParc).toFixed(2); // Descubro o valor de cada parcela dividindo o valor da dívida pelo número de parcelas. Fixo para ter duas casas decimais
    result[x + 3] = ValParc; // Guardo o valor de cada parcela no array

    if (Jur == 0.0) { // Faço um if, pois a primeira vez que o for ser executado, será diferente os novos valores para Juros e para o número de parcelas
      Jur += 0.1; // Sendo o primeiro valor mudado de 0 para 0.1
    } else {
      Jur += 0.05; // Enquanto os demais somam apenas 0.05
    }

    if (nParc == 1) { // O mesmo ocorre com o número de parcelas, onde:
      nParc += 2 // Na primeira repetiçã, pula-se de 1 para 3 (contando mais 2)
    } else {
      nParc += 3 // enquanto nas demias soma-se mais três
    }
  }

  //Saída

  document.getElementById('1Valor').innerText = "R$" + result[2]; // Coloco cada variável no seu devido lugar, buscando-os dentro dos arrays
  document.getElementById('1Parcela').innerText = result[1];
  document.getElementById('1Juros').innerText = result[0];
  document.getElementById('1ValorParc').innerText = "R$" + result[3];

  document.getElementById('3Valor').innerText = "R$" + result[6];
  document.getElementById('3Parcela').innerText = result[5];
  document.getElementById('3Juros').innerText = "R$" + result[4];
  document.getElementById('3ValorParc').innerText = "R$" + result[7];

  document.getElementById('6Valor').innerText = "R$" + result[10];
  document.getElementById('6Parcela').innerText = result[9];
  document.getElementById('6Juros').innerText = "R$" + result[8];
  document.getElementById('6ValorParc').innerText = "R$" + result[11];

  document.getElementById('9Valor').innerText = "R$" + result[14];
  document.getElementById('9Parcela').innerText = result[13];
  document.getElementById('9Juros').innerText = "R$" + result[12];
  document.getElementById('9ValorParc').innerText = "R$" + result[15];

  document.getElementById('12Valor').innerText = "R$" + result[18];
  document.getElementById('12Parcela').innerText = result[17];
  document.getElementById('12Juros').innerText = "R$" + result[16];
  document.getElementById('12ValorParc').innerText = "R$" + result[19];
};