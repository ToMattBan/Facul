def main():

    notas = []

    nota = float(input("Insira a nota » "))
    notas.append(nota)

    while ((len(notas)) < 4):
        nota = float(input("Insira a próxima nota » "))
        notas.append(nota)

    print("A maior nota foi » {}" .format(max(notas)))
    print("A menor nota foi » {}" .format(min(notas)))
    print("A média foi » {}" .format(sum(notas)/4))

if __name__ == "__main__":
    main()