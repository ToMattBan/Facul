function Potencia() {
  var base = parseInt(document.getElementById('base').value); // Pegando a base da conta
  var expo = parseInt(document.getElementById('expo').value); // Pegando o expoente da conta
  var result1 = 1; // Como usarei os três métodos de uma vez, criei uma variável para cada um receber o resultado de um método
  var result2 = 1;
  var result3 = 1;

  if (expo < 0) { // Digo que se o número for menor que 0, ele não fará a conta, pois não existe potência com número negativo
    result1 = "Impossível potêcia com número negativo;"
    result2 = "Impossível potêcia com número negativo;"
    result3 = "Impossível potêcia com número negativo;"
  } else {

    if (expo == 0) { // Digo que se o número for igual a 0, ele setará o resultado como 1, pois qualquer numero elevado a 0 é 1
      result1 = 1;
      result2 = 1;
      result3 = 1;
    } else {

      if (expo == 1) { // Digo que se o número for igual a 1, ele setará o resultado como ele mesmo,pois qualquer numero elevado a 1 é ele mesmo
        result1 = base;
        result2 = base;
        result3 = base;
      } else {

        result1 = base; // Defino o resultado como base para que seja multiplicado mais a frente. É feito fora do for para que não reinicie o valor a cada loop
        for (var x = 1; x <= (expo - 1); x++) { // Crio o x para que ele atue como contador. Utilizo o expoente menos 1 para parar a equação pois quando o result recebe a base já conta como a primera vez do loop
          result1 = result1 * base; // Faço o número vezes ele mesmo
        }

        x = 1; // Defino x como 1 para conseguir reiniciar a conta de modo confiável e certeiro, para assim utilizá-lo novamente como contador

        result2 = base; // Defino o resultado como base para que seja multiplicado mais a frente. É feito fora do while para que não reinicie o valor a cada loop
        while (x <= (expo - 1)) { // Utilizo o expoente menos 1 para parar a equação pois quando o result recebe a base já conta como a primera vez do loop
          result2 = result2 * base; // Faço o número vezes ele mesmo
          x++; // Acrescento x em 1 para que o loop continue
        }

        x = 1; // Defino x como 1 para conseguir reiniciar a conta de modo confiável e certeiro, para assim utilizá-lo novamente como contador

        result3 = base; // Defino o resultado como base para que seja multiplicado mais a frente. É feito fora do do while para que não reinicie o valor a cada loop
        do { // Mandando com ele faça as coisas abaixo
          result3 = result3 * base; // Faço o número vezes ele mesmo
          x++; // Acrescento x em 1 para que o loop continue
        } while (x <= (expo - 1)); // Utilizo o expoente menos 1 para parar a equação pois quando o result recebe a base já conta como a primera vez do loop
      }
    }
  }

  document.getElementById('poten1').innerText = "Com for » " + result1; // Imprimo o resultado feito com for
  document.getElementById('poten2').innerText = "Com while » " + result2; // Imprimo o resultado feito com while
  document.getElementById('poten3').innerText = "Com do while » " + result3; // Imprimo o resultado feito com do while
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
function ParImpar() {
  var inicial = parseInt(document.getElementById('inicial').value); // Pegando o valor inicial
  var final = parseInt(document.getElementById('final').value); // Pegando o valor final
  var par1 = ""; // Criando as listas que servirão de saída
  var contpar1 = 0;
  var impar1 = "";
  var contimpar1 = 0;
  var par2 = "";
  var contpar2 = 0;
  var impar2 = "";
  var contimpar2 = 0;
  var par3 = "";
  var contpar3 = 0;
  var impar3 = "";
  var contimpar3 = 0;

  for (var x = inicial; x <= final; x++) { //Dou o valor de inicial para x para que seja aí que inicie, e digo que só acabará quando x for maior que o número final, a cada volta x aumentará em ujm
    var resul = x % 2; // Faço a conta módulo, que retorna o resto de uma divisão. Faço por 2, pois assim dá para saber se é par ou ímpar
    if (resul == 0) { // Caso o resto da divisão for 0, o que aponta que que o número é par, acrescento ele na lista
      par1 += "\n" + x;
      contpar1++; // Aqui estou somando a quantidade de números em suas respectivas listas
    }
    if (resul == 1) { // Caso o resto da divisão for 1, o que aponta que que o número é ímpar, acrescento ele na lista
      impar1 += "\n" + x;
      contimpar1++; // Aqui estou somando a quantidade de números em suas respectivas listas
    }
  }

  x = inicial; // Seto x como valor inicial para resetar a conta para  novo método
  while (x <= final) { // Digo que a conta apenas acabará quando x for maior que o número final
    var resul = x % 2; // Faço a conta módulo, que retorna o resto de uma divisão. Faço por 2, pois assim dá para saber se é par ou ímpar
    if (resul == 0) { // Caso o resto da divisão for 0, o que aponta que que o número é par, acrescento ele na lista
      par2 += "\n" + x;
      contpar2++; // Aqui estou somando a quantidade de números em suas respectivas listas
    }
    if (resul == 1) { // Caso o resto da divisão for 1, o que aponta que que o número é ímpar, acrescento ele na lista
      impar2 += "\n" + x;
      contimpar2++; // Aqui estou somando a quantidade de números em suas respectivas listas
    }
    x++ // Acrescento x em 1 para continuar a conta
  }

  x = inicial; // Seto x como valor inicial para resetar a conta para  novo método
  do {
    var resul = x % 2; // Faço a conta módulo, que retorna o resto de uma divisão. Faço por 2, pois assim dá para saber se é par ou ímpar
    if (resul == 0) { // Caso o resto da divisão for 0, o que aponta que que o número é par, acrescento ele na lista
      par3 += "\n" + x;
      contpar3++; // Aqui estou somando a quantidade de números em suas respectivas listas
    }
    if (resul == 1) { // Caso o resto da divisão for 1, o que aponta que que o número é ímpar, acrescento ele na lista
      impar3 += "\n" + x;
      contimpar3++; // Aqui estou somando a quantidade de números em suas respectivas listas
    }
    x++ // Acrescento x em 1 para continuar a conta
  } while (x <= final); // Digo que a conta apenas acabará quando x for maior que o número final

  document.getElementById('par1').innerText = contpar1 + " Pares com for" + par1; // Imprimo os resultados pares feito com for
  document.getElementById('impar1').innerText = contimpar1 + " Ímpares com for" + impar1; // Imprimo os resultados impares feito com while
  document.getElementById('par2').innerText = contpar2 + " Pares com while" + par2; // Imprimo os resultados pares feito com do while
  document.getElementById('impar2').innerText = contimpar2 + " Ímpares com while" + impar2; // Imprimo os resultados impares feito com for
  document.getElementById('par3').innerText = contpar3 + " Pares com do while" + par3; // Imprimo os resultados pares feito com whil "\n" + e
  document.getElementById('impar3').innerText = contimpar3 + " Ímpares com do while" + impar3; // Imprimo os resultados impares feito com do while
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
function Media100() {
  var n1 = 1; // Defino o valor como 1 para iniciar a conta
  var n2 = 100; // Defino o valor como 100 para finalizar a conta
  var resp1 = 0; // Como usarei os três métodos de uma vez, criei uma variáveil para cada um receber o resultado de um método
  var resp2 = 0;
  var resp3 = 0;

  resp1 = n1; // Seto a resposta como n1 pra conseguir somá-la com o número seguinte
  for (var x = n1; x <= (n2 - 1); x++) { // Crio o x para que ele atue como contador. Utilizo o primeiro número pois é com ele que a contage se inicie, dig que a contagem finalizará no segundo número e cada vez ele se incrementará em 1
    resp1 += (x + 1); // Digo que a resposta será ela mesma mais o contador, assim estarei somando os números sucessivamente 
  }
  resp1 = resp1 / (n2 - n1 + 1); // Divido a resposta por n2 menos n1, + 1 ppois assim conto todos os números que foram usados.

  x = n1; // Reinicio o valor de x para que a conta seja feita novamente
  resp2 = n1; // Seto a resposta como n1 pra conseguir somá-la com o número seguinte
  while (x <= (n2 - 1)) { // Ele fará isso tudo enquanto x for menor que n2 - 1, esse -1 está aí pois o loop acontece uma vez a mais aqui
    resp2 += (x + 1); // Digo que a resposta será ela mesma mais o contador, assim estarei somando os números sucessivamente
    x++; // Acrescento x em 1 para que o loop continue
  }
  resp2 = resp2 / (n2 - n1 + 1); // Divido a resposta por n2 menos n1 + 1, pois assim conto todos os números que foram usados.

  x = n1; // Reinicio o valor de x para que a conta seja feita novamente
  resp3 = n1; // Seto a resposta como n1 pra conseguir somá-la com o número seguinte
  do {
    resp3 += (x + 1); // Digo que a resposta será ela mesma mais o contador, assim estarei somando os números sucessivamente
    x++; // Acrescento x em 1 para que o loop continue
  } while (x <= (n2 - 1)) // Ele fará isso tudo enquanto x for menor que n2 - 1, esse -1 está aí pois o loop acontece uma vez a mais aqui
  resp3 = resp3 / (n2 - n1 + 1); // Divido a resposta por n2 menos n1 + 1, pois assim conto todos os números que foram usados.

  document.getElementById("resp1").innerText = "Com for » " + resp1.toFixed(2); // Imprimo o resultado feito com for
  document.getElementById("resp2").innerText = "Com while » " + resp2.toFixed(2); // Imprimo o resultado feito com for
  document.getElementById("resp3").innerText = "Com do while » " + resp3.toFixed(2); // Imprimo o resultado feito com for
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
function Soma_Dificil() {
  var n1 = parseInt(document.getElementById('inicial').value); // Pegando o número inicial
  var n2 = parseInt(document.getElementById('final').value); // Pegando o número final
  var resp1 = 0; // Como usarei os três métodos de uma vez, criei uma variáveil para cada um receber o resultado de um método
  var resp2 = 0;
  var resp3 = 0;

  resp1 = n1; // Seto a resposta como n1 pra conseguir somá-la com o número seguinte
  for (var x = n1; x <= (n2 - 1); x++) { // Crio o x para que ele atue como contador. Utilizo o primeiro número pois é com ele que a contage se inicie, dig que a contagem finalizará no segundo número e cada vez ele se incrementará em 1
    resp1 += (x + 1); // Digo que a resposta será ela mesma mais o contador, assim estarei somando os números sucessivamente 
  }
  resp1 = resp1 / (n2 - n1 + 1); // Divido a resposta por n2 menos n1, + 1 ppois assim conto todos os números que foram usados.

  x = n1; // Reinicio o valor de x para que a conta seja feita novamente
  resp2 = n1; // Seto a resposta como n1 pra conseguir somá-la com o número seguinte
  while (x <= (n2 - 1)) { // Ele fará isso tudo enquanto x for menor que n2 - 1, esse -1 está aí pois o loop acontece uma vez a mais aqui
    resp2 += (x + 1); // Digo que a resposta será ela mesma mais o contador, assim estarei somando os números sucessivamente
    x++; // Acrescento x em 1 para que o loop continue
  }
  resp2 = resp2 / (n2 - n1 + 1); // Divido a resposta por n2 menos n1 + 1, pois assim conto todos os números que foram usados.

  x = n1; // Reinicio o valor de x para que a conta seja feita novamente
  resp3 = n1; // Seto a resposta como n1 pra conseguir somá-la com o número seguinte
  do {
    resp3 += (x + 1); // Digo que a resposta será ela mesma mais o contador, assim estarei somando os números sucessivamente
    x++; // Acrescento x em 1 para que o loop continue
  } while (x <= (n2 - 1)) // Ele fará isso tudo enquanto x for menor que n2 - 1, esse -1 está aí pois o loop acontece uma vez a mais aqui
  resp3 = resp3 / (n2 - n1 + 1); // Divido a resposta por n2 menos n1 + 1, pois assim conto todos os números que foram usados.

  document.getElementById("resp1").innerText = "Com for » " + resp1.toFixed(2); // Imprimo o resultado feito com for
  document.getElementById("resp2").innerText = "Com while » " + resp2.toFixed(2); // Imprimo o resultado feito com for
  document.getElementById("resp3").innerText = "Com do while » " + resp3.toFixed(2); // Imprimo o resultado feito com for
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
function Multiplos() {
  var resp1 = 0; // Como usarei os três métodos de uma vez, criei uma variável para cada um receber o resultado de um método
  var list1 = ""; // As listas servirão para armazenar os resultados todos de uma vez.
  var resp2 = 0;
  var list2 = "";
  var resp3 = 0;
  var list3 = "";

  for (var x = 1; x <= 100; x++) { // Crio o x para que ele atue como contador. Como a conta vai até 100, utilizo o mesmo para parar a repetição. X se somará ao número para conseguir fazer a conta corretamente
    resp1 = x / 3; // Divido o número atual por esse para ver o resultado
    resp1_1 = x / 5; // Divido o número atual por esse para ver o resultado
    if ((Number.isInteger(resp1)) && (Number.isInteger(resp1_1))) { // Caso ambos resultados forem inteiros, significa que é multiplo dos dois
      list1 += "\n" + x; // Adiciono o resultado na lista
    }
  }

  x = 1; // Reinicio o valor de x para que a conta seja feita novamente
  while (x <= 100) { // Informo que tudo será feito até que x seja maior que 100
    resp1 = x / 3; // Divido o número atual por esse para ver o resultado
    resp1_1 = x / 5; // Divido o número atual por esse para ver o resultado
    if ((Number.isInteger(resp1)) && (Number.isInteger(resp1_1))) { // Caso ambos resultados forem inteiros, significa que é multiplo dos dois
      list2 += "\n" + x; // Adiciono o resultado na lista
    }
    x++ // Aumento em 1 o valor de x para que a conta continue
  }

  x = 1; // Reinicio o valor de x para que a conta seja feita novamente
  do {
    resp1 = x / 3; // Divido o número atual por esse para ver o resultado
    resp1_1 = x / 5; // Divido o número atual por esse para ver o resultado
    if ((Number.isInteger(resp1)) && (Number.isInteger(resp1_1))) { // Caso ambos resultados forem inteiros, significa que é multiplo dos dois
      list3 += "\n" + x; // Adiciono o resultado na lista
    }
    x++ // Aumento em 1 o valor de x para que a conta continue
  } while (x <= 100); // Informo que tudo será feito até que x seja maior que 100

  document.getElementById("resp1").innerText = "Com for » " + list1; // Imprimo o resultado feito com for
  document.getElementById("resp2").innerText = "Com while » " + list2; // Imprimo o resultado feito com for
  document.getElementById("resp3").innerText = "Com do while » " + list3; // Imprimo o resultado feito com for
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
function Tabuada() {
  var num = parseInt(document.getElementById("num").value);
  var resp1 = 0; // Como usarei os três métodos de uma vez, criei uma variáveil para cada um receber o resultado de um método
  var list1 = "";
  var resp2 = 0;
  var list2 = "";
  var resp3 = 0;
  var list3 = "";
  var resptemp = 0;

  for (var x = 1; x <= 10; x++) { // Crio o x para que ele atue como contador. Como a conta vai até 10, utilizo o mesmo para parar a repetição. Será adicionado 1 ao X para conseguir fazer a conta corretamente
    resptemp = num * x; // Armazeno a multiplicação em uma variável temporária
    list1 += "\n" + num + " * " + x + " = " + resptemp; // Coloco o resultado em uma lista, dizendo o número pelo qual foi multiplicado
  }

  x = 1; // Reinicio o valor de x para que a conta seja feita novamente
  while (x <= 10) { // Enquanto x não for maior que 10, a conta continuará
    resptemp = num * x; // Armazeno a multiplicação em uma variável temporária
    list2 += "\n" + num + " * " + x + " = " + resptemp; // Coloco o resultado em uma lista, dizendo o número pelo qual foi multiplicado
    x++ // Aumento em 1 o valor de x para que a conta continue
  }

  x = 1; // Reinicio o valor de x para que a conta seja feita novamente
  do {
    resptemp = num * x; // Armazeno a multiplicação em uma variável temporária
    list3 += "\n" + num + " * " + x + " = " + resptemp; // Coloco o resultado em uma lista, dizendo o número pelo qual foi multiplicado
    x++ // Aumento em 1 o valor de x para que a conta continue
  } while (x <= 10); // Enquanto x não for maior que 10, a conta continuará

  document.getElementById("resp1").innerText = "Com for » " + list1; // Imprimo o resultado feito com for
  document.getElementById("resp2").innerText = "Com while » " + list2; // Imprimo o resultado feito com for
  document.getElementById("resp3").innerText = "Com do while » " + list3; // Imprimo o resultado feito com for
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
function Primos() {
  var resp1 = ""; // Essas serão as listas com os resultados
  var resp2 = "";
  var resp3 = "";
  var cont = 0; // Demais variáveis serão explicadas mais a frente
  var val = 0;

  for (var x = 1; x <= 100; x++) { // Crio um for para fazer as contas, testando cada número de 1 a 100
    cont = 0; // Zero o contador, cujo propósito será explicado mais a frente
    for (var y = 1; y <= x; y++) { // Crio outro for, para que as divisões sejam feitas com cada número todas as vezes necessárias
      val = x / y; // Divido x por y, e sempre que y aumentar, estarei dividindo x com o próximo número. Variavel val pega esses resultado para testá-los
      if (Number.isInteger(val)) { // Números primos são números que possuem apenas dois divisores, ou seja, apenas em duas contas seu resultado será inteiro. Portanto valido se o resultado é inteiro ou não
        cont++; // Aumento em um o contador, que servirá para verificar quantos divisores o número teve
      }
    }
    if (cont == 2) { // Aqui digo que, caso o número tenha tido apenas dois divisores (1 e ele mesmo), ele entrará na lista.
      resp1 += "\n " + x;
    }
  }

  x = 1; // Reinicio o valor de x para que a conta seja feita novamente
  while (x <= 100) { // Toda a função será executada apenas enquanto x for menos ou igual a 100
    cont = 0; // Reinicio o contador, pois cada número deverá ser contado novamente
    y = 1; // Reinicio o valor de y para que a conta seja feita novamente, o for faz isso automaticamente, mas aqui não
    while (y <= x) {
      val = x / y;
      if (Number.isInteger(val)) { // Números primos são números que possuem apenas dois divisores, ou seja, apenas em duas contas seu resultado será inteiro. Portanto valido se o resultado é inteiro ou não
        cont++; // Aumento em um o contador, que servirá para verificar quantos divisores o número teve
      }
      y++ // Aumento y em um para que a conta seja feita com todos o divisores possíveis
    }
    if (cont == 2) { // Aqui digo que, caso o número tenha tido apenas dois divisores (1 e ele mesmo), ele entrará na lista.
      resp2 += "\n " + x;
    }
    x++; // Aumento o x para que a conta seja feita com todos os números de 1 até 100
  }

  x = 1; // Reinicio o valor de x para que a conta seja feita novamente
  do {
    cont = 0; // Reinicio o contador, pois cada número deverá ser contado novamente
    y = 1; // Reinicio o valor de y para que a conta seja feita novamente, o for faz isso automaticamente, mas aqui não
    do {
      val = x / y; // Divido x por y, e sempre que y aumentar, estarei dividindo x com o próximo número. Variavel val pega esses resultado para testá-los
      if (Number.isInteger(val)) { // Números primos são números que possuem apenas dois divisores, ou seja, apenas em duas contas seu resultado será inteiro. Portanto valido se o resultado é inteiro ou não
        cont++; // Aumento em um o contador, que servirá para verificar quantos divisores o número teve
      }
      y++ // Aumento y em um para que a conta seja feita com todos o divisores possíveis
    } while (y <= x); // Enquanto y for menor ou igual a x, a função será executada
    if (cont == 2) { // Aqui digo que, caso o número tenha tido apenas dois divisores (1 e ele mesmo), ele entrará na lista.
      resp3 += "\n " + x;
    }
    x++; // Aumento o x para que a conta seja feita com todos os números de 1 até 100
  } while (x <= 100); // Toda a função será executada apenas enquanto x for menos ou igual a 100

  document.getElementById("resp1").innerText = "Com for » " + resp1; // Imprimo o resultado feito com for
  document.getElementById("resp2").innerText = "Com while » " + resp2; // Imprimo o resultado feito com for
  document.getElementById("resp3").innerText = "Com do while » " + resp3; // Imprimo o resultado feito com for
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
function GrandeSoma() {
  var inicial = parseInt(document.getElementById('inicial').value); // Pegando o valor inicial
  var final = parseInt(document.getElementById('final').value); // Pegando o valor final
  var resp1 = 0;
  var resp1_1 = 0;
  var resp2 = 0;
  var resp2_2 = 0;
  var resp3 = 0;
  var resp3_3 = 0;

  for (var x = inicial; x <= final; x++) {
    resp1 += x;
  }

  for (var x = final; x >= inicial; x--) {
    resp1_1 += x;
  }

  x = inicial; // Reinicio o valor de x para que a conta seja feita novamente
  while (x <= final) {
    resp2 += x;
    x++;
  }

  x = final; // Reinicio o valor de x para que a conta seja feita novamente
  while (x >= inicial) {
    resp2_2 += x;
    x--;
  }

  x = inicial; // Reinicio o valor de x para que a conta seja feita novamente
  do {
    resp3 += x;
    x++;
  } while (x <= final)

  x = final; // Reinicio o valor de x para que a conta seja feita novamente
  do {
    resp3_3 += x;
    x--;
  } while (x >= inicial)

  document.getElementById('soma1').innerText = "Soma com for »" + "\n" + resp1; // Imprimo os resultados pares feito com for
  document.getElementById('soma1_1').innerText = "Soma Inversa com for »" + "\n" + resp1_1; // Imprimo os resultados impares feito com while
  document.getElementById('soma2').innerText = "Soma com while »" + "\n" + resp2; // Imprimo os resultados pares feito com do while
  document.getElementById('soma2_2').innerText = "Soma Inversa com while »" + "\n" + resp2_2; // Imprimo os resultados impares feito com for
  document.getElementById('soma3').innerText = "Soma com do while »" + "\n" + resp3; // Imprimo os resultados pares feito com whil "\n" + e
  document.getElementById('soma3_3').innerText = "Soma Inversa com do while »" + "\n" + resp3_3; // Imprimo os resultados impares feito com do while
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
function Triângulo() {
  base = parseInt(document.getElementById("base").value); // Pegando o valor que será a base;
  var res1 = "";
  var res2 = "";
  var res3 = "";
  var cont1;
  var cont2;
  var temp;

  temp = base % 2;

  if (temp == 0) {
    for (cont1 = 0; cont1 <= base; cont1 += 2) {
      for (cont2 = 1; cont2 <= cont1; cont2++) {
        res1 += "*";
      }
      res1 += "<br>";
    }

    cont1 = 0;
    while (cont1 <= base) {
      cont2 = 1;
      while (cont2 <= cont1) {
        res2 += "*";
        cont2++;
      }
      res2 += "<br>";
      cont1 += 2;
    }

    cont1 = 0;
    do {
      cont2 = 1;
      if (cont1 != 0) {
        do {
          res3 += "*";
          cont2++;
        } while (cont2 <= cont1);
      }
      res3 += "<br>";
      cont1 += 2;
    } while (cont1 <= base);



  } else {
    for (cont1 = 1; cont1 <= base; cont1 += 2) {
      for (cont2 = 1; cont2 <= cont1; cont2++) {
        res1 += "*";
      }
      res1 += "<br>";
    }

    cont1 = 1;
    while (cont1 <= base) {
      cont2 = 1;
      while (cont2 <= cont1) {
        res2 += "*";
        cont2++;
      }
      res2 += "<br>";
      cont1 += 2;
    }

    cont1 = 1;
    do {
      cont2 = 1;
        do {
          res3 += "*";
          cont2++;
        } while (cont2 <= cont1);
      res3 += "<br>";
      cont1 += 2;
    } while (cont1 <= base);

  }

  document.getElementById("triangulo1").innerHTML = "Utilizando for »" + "<br>" + "<font face='courier new'>" + res1;
  document.getElementById("triangulo2").innerHTML = "Utilizando while »" + "<font face='courier new'>" + "<br>" + res2;
  document.getElementById("triangulo3").innerHTML = "Utilizando do while »" + "<font face='courier new'>" + "<br>" + res3;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------;
function Parcelamento() {
  var npar = parseInt(document.getElementById('npar').value);
  var dateBase = new Date(document.getElementById('dateBase').value);
  var tempParc = parseInt(document.getElementById('tempParc').value);
  var parcelas = "";



  // var teste = new Date(document.getElementById('dateBase').value);
  // teste.setDate(teste.getDate() + 30);

  dateBase.setDate(dateBase.getDate() + (tempParc + 1), 'days')
  if (dateBase.getDay() == 0) {
    dateBase.setDate(dateBase.getDate() + 1, 'days')
  }
  if (dateBase.getDay() == 6) {
    dateBase.setDate(dateBase.getDate() + 2, 'days')
  }
  for (var x = 1; x <= npar; x++) {
    parcelas += x + "º Parcela » " + ("0" + dateBase.getDate()).slice(-2) + "/" + ("0" + (dateBase.getMonth() + 1)).slice(-2) + "/" + dateBase.getFullYear() + "\n" + "\n";
    dateBase.setDate(dateBase.getDate() + (tempParc), 'days')
    if (dateBase.getDay() == 0) {
      dateBase.setDate(dateBase.getDate() + 1, 'days')
    }
    if (dateBase.getDay() == 6) {
      dateBase.setDate(dateBase.getDate() + 2, 'days')
    }
  }




  document.getElementById('parcelas').innerText = parcelas;
};