def main():

    arquivoListaIps = open("Trabalho 15-04/listaIps.txt", "r")

    listaIps = []

    for linha in arquivoListaIps:
        linha = linha.strip()
        listaIps.append(linha)
        
    print(listaIps)

    arquivoListaIps.close()

    apenasUmIp = open("Trabalho 15-04/primeiroIp.txt", "w")
    apenasUmIp.write(listaIps[0])
    apenasUmIp.close()

if __name__ == "__main__":
    main()