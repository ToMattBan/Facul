var filaPessoas = [];
var nomeVazio = false;
var limiteExcedido = false;
var adicionado = false;
var removido = false;

function listaPessoas() {
  //Entrada
  var divListaRepeticao = document.getElementById("listaRepeticao");
  var info = document.getElementById('informacao');
  var nroPessoas = filaPessoas.length;

  //Processamento 

  var resultado = "";

  if (nomeVazio == true) {
    info.value = "O nome não pode estar em branco!"
  } else {
    if (limiteExcedido == true) {
      info.value = "A fila está cheia!"
    } else {
      if (adicionado == true) {
        info.value = "Bem Vindo!";
      };
      if (adicionado == false) {
        if (removido == true) {
          info.value = "Saiu da Fila!";
        } else {
          info.value = "A fila de pessoas está vazia!!!";
        }
      }
    }
  }

  for (var contaPessoa = 0; contaPessoa < nroPessoas; contaPessoa++) {
    resultado += "<tr><td>" + filaPessoas[contaPessoa] + "</td></tr>";
  };

  //Saída  
  divListaRepeticao.innerHTML = resultado;
  return true;
};

function inserePessoa() {
  //Entrada
  var nomePessoa = document.getElementById('nomePessoa').value;
  var nroPessoas = filaPessoas.length;

  //Processamento
  if (nomePessoa == "") {
    nomeVazio = true;
    listaPessoas();
  } else {
    nomeVazio = false;

    if (nroPessoas == 5) {
      limiteExcedido = true;
      listaPessoas();
    } else {
      limiteExcedido = false;
      filaPessoas.push(nomePessoa);

      //Saída
      adicionado = true;
      listaPessoas();
      adicionado = false;
    }
  }
  document.getElementById('nomePessoa').value = "";
  document.getElementById('nomePessoa').focus();
};

function removePessoa() {
  //Entrada
  
  //Processamento
  filaPessoas.splice(0, 1);
  
  //Saída
  removido = true;
  limiteExcedido = false;
  listaPessoas();
  removido = false;
  document.getElementById('nomePessoa').focus();
};

function limpaPessoas() {
  //Entrada
  
  //Processamento
  filaPessoas = [];
  
  //Saída
  listaPessoas();
  return true;
  document.getElementById('nomePessoa').focus();
};