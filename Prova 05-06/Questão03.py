def main():

    numeros = []

    numero = float(input("Insira um número » "))
    numeros.append(numero)

    while (numero != float(-1)):
        numero = float(input("Insira o próximo nº (-1 para encerrar) » "))
        if (numero != -1):
            numeros.append(numero)

    print(min(numeros))
    print(max(numeros))
    print(sum(numeros))

if __name__ == "__main__":
    main()