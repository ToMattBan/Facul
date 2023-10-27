def main():

    notas = []

    nota = float(input("Insira a nota » "))
    notas.append(nota)

    while (nota != float(-1)):
        nota = float(input("Insira a próxima nota (-1 para encerrar) » "))
        if (nota != -1):
            notas.append(nota)

    print(len(notas))
    print(notas)
    print(sum(notas))

if __name__ == "__main__":
    main()