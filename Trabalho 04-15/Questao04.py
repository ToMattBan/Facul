def main():

    maiorNumero = float(input("Digite um número » "))
    numerosDigitados = 1

    while (numerosDigitados < 5):
        numerosDigitados += 1
        novoNumero = float(input("Digite outro número » "))

        if (novoNumero > maiorNumero):
            maiorNumero = novoNumero

    print("O maior número foi » {}" .format(maiorNumero))

if __name__ == "__main__":
    main()