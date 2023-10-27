def main():

    numero = int(input("Insira um número » "))

    if numero % 2 == 0:
        tipo = 'par'
    else:
        tipo = 'impar'


    print("O número informado é {}" .format(tipo))

if __name__ == "__main__":
    main()