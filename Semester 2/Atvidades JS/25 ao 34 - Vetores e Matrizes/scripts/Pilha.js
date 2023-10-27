var pilhaCaixas = [];
var numVazio = false;
var pilhaVazia = false;
var limiteExcedido = false;
var adicionado = false;
var removido = false;

function listaCaixas() {
  //Entrada
  var divListaRepeticao = document.getElementById("listaRepeticao");
  var info = document.getElementById('informacao');
  var nroCaixas = pilhaCaixas.length;

  //Processamento 

  var resultado = "";

  if (pilhaVazia == true) {
    info.value = "Impossível remover algo de uma pilha vazia!"
  } else {
    if (numVazio == true) {
      info.value = "O número não pode estar em branco!"
    } else {
      if (limiteExcedido == true) {
        info.value = "A pilha está cheia, empilhe em outro lugar!"
      } else {
        if (adicionado == true) {
          info.value = "Caixa adicionada à pilha!";
        };
        if (adicionado == false) {
          if (removido == true) {
            info.value = "Saiu da Pilha!";
          } else {
            info.value = "A pilha de caixas está vazia!!!";
          }
        }
      }
    }
  }

  for (var contaCaixas = 0; contaCaixas < nroCaixas; contaCaixas++) {
    resultado += "<tr><td>" + pilhaCaixas[contaCaixas] + "</td></tr>";
  };

  //Saída  
  divListaRepeticao.innerHTML = resultado;
  return true;
};

function insereCaixa() {
  //Entrada
  var numCaixa = document.getElementById('numCaixa').value;
  var nroCaixas = pilhaCaixas.length;

  //Processamento
  if (numCaixa == "") {
    numVazio = true;
    listaCaixas();
  } else {
    numVazio = false;

    if (nroCaixas == 5) {
      limiteExcedido = true;
      listaCaixas();
    } else {
      limiteExcedido = false;
      pilhaCaixas.push(numCaixa);

      //Saída
      adicionado = true;
      listaCaixas();
      adicionado = false;
    }
  }
  document.getElementById('numCaixa').value = "";
  document.getElementById('numCaixa').focus();
};

function removeCaixa() {
  //Entrada

  //Processamento
  if (pilhaCaixas.length == 0) {
    pilhaVazia = true;
    listaCaixas();
    pilhaVazia = false;
  } else {
    pilhaVazia = false;
    pilhaCaixas.pop();

    //Saída
    removido = true;
    limiteExcedido = false;
    listaCaixas();
    removido = false;
    document.getElementById('numCaixa').focus();
  }
};

function limpaCaixas() {
  //Entrada

  //Processamento
  pilhaCaixas = [];

  //Saída
  listaCaixas();
  return true;
  document.getElementById('numCaixa').focus();
};