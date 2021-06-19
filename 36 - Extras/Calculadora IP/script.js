function CalculaIP() { //Declaração das variáveis
    var oct1 = parseInt(document.getElementById("oct1").value); //Representa o primeiro octeto do IP
    var oct2 = parseInt(document.getElementById("oct2").value); //Representa o segundo octeto do IP
    var oct3 = parseInt(document.getElementById("oct3").value); //Representa o terceiro octeto do IP
    var oct4 = parseInt(document.getElementById("oct4").value); //Representa o quarto octeto do IP
    var cidr = parseInt(document.getElementById("cidr").value); //Representa o CIDR
    var CA = false; //A partir daqui, as variáveis serão explicadas quando seus usos chegarem
    var CB = false;
    var CC = false;
    var nip = 0;
    var nsr = 0;
    var nmr = 0;
    var niv = 0;
    var temp = 0;
    var gw = "";
    var bc = "";
    var mr = "";
    var sr = [];


    if ((oct1 < 0) || (oct1 > 256) || (oct2 < 0) || (oct2 > 256) || (oct3 < 0) || (oct3 > 256) || (oct4 < 0) || (oct4 > 256)) {
        alert("O número do IP deve estar entre 0 e 256!") //Validação dos números dos IP's
    } else {
        if ((oct1 > 0) && (oct1 < 128)) { //Aqui descobrimos a qual classe pertence o IP
            CA = true; // Se ele é Classe A
        } else {
            if ((oct1 > 127) && (oct1 < 192)) {
                CB = true; // Se ele é Classe B
            } else {
                CC = true; // Se ele é Classe C
            } // As outras Classes não estão aqui representadas pois não possuem utilidade comercial, são para multicast ou experimentos.
        }


        if ((CA == true) && ((cidr < 8) || (cidr > 32))) { //Aqui validamos se o CIDR fornecido condiz com a classe do IP
            alert("CIDR para classe A deve ser entre 8 e 32");
        } else {
            if ((CB == true) && ((cidr < 16) || (cidr > 32))) {
                alert("CIDR para classe B deve ser entre 16 e 32");
            } else {
                if ((CC == true) && ((cidr < 24) || (cidr > 32))) {
                    alert("CIDR para classe C deve ser entre 24 e 32");
                }
            }



            nip = 2 ** (32 - cidr); //Para descobrir a quantidade de IPS que terá na rede

            niv = nip - 2; //Calculando o número de IP's válidos

            nsr = 256 / nip; //Descobrindo o número de SubRedes


            gw = oct1.toString() + "." + oct2.toString() + "." + oct3.toString() + "." + nip.toString(); //Para pegar o gateway

            bc = oct1.toString() + "." + oct2.toString() + "." + oct3.toString() + "." + (nip + (nip - 1)).toString(); //Para saber o broadcast



            nmr = 256 - (nip); // Para conseguir calcular a máscara de rede 

            if (CA == true) { //Aqui veremos a qual classe o IP pertence para fazer a sua máscara
                mr = "255" + "." + nmr.toString() + "." + nmr.toString() + "." + nmr.toString(); //Na classe A  3 octetos são reservados à Rede, portanto 3 octetos estarão mascarados
            } else {
                if (CB == true) {
                    mr = "255" + "." + "255" + "." + nmr.toString() + "." + nmr.toString(); //Na classe B  2 octetos são reservados à Rede, portanto 2 octetos estarão mascarados
                } else {
                    if (CC == true) {
                        mr = "255" + "." + "255" + "." + "255" + "." + nmr.toString(); //Na classe C  1 octetos é reservados à Rede, portanto 1 octetos estará mascarado
                    }
                }
            }


            for (var x = 0; x < 255; x += nip) {        // Para criar um array contendo todas as faixas de subredes
                var tempo = temp + (nip - 1);           // Variável tempo armazena o último número de cada faixa, enquanto a temp armazena o primeiro
                var lin = sr.push(temp.toString() + " ... " + tempo.toString() + "\n");    //Estou colocando no Array sr o temp convertido em String, seguido de "...", seguido de tempo convertido em String
                temp = tempo + 1;       // Coloco temp como o valor antigo de tempo acrescentado de 1 para que assim a contagem continue do sucessor do último digito da lista anterior, e não no próprio último dígito
            }


            document.getElementById("qthost").innerText = "Quantidade de Hosts » " + nip;
            document.getElementById("gw").innerText = "Gateway » " + gw;
            document.getElementById("bc").innerText = "Broadcast » " + bc;
            document.getElementById("ipv").innerText = "Ip's Válidos » " + niv;
            document.getElementById("mk").innerText = "Máscara de Rede » " + mr;
            document.getElementById("sbfi").innerText = "Subredes e Faixas » " + "\n" + sr.join('');
            document.getElementById("nsr").innerText = "Nº de Subredes » " + nsr;

        }
    }
}