def main():

    notas = []
    maiorNota = float(0.0)
    menorNota = float(10.0)

    nota = float(input("Insira a nota » "))
    notas.append(nota)

    while ((len(notas)) < 3):
        nota = float(input("Insira a próxima nota » "))
        notas.append(nota)

    media = (sum(notas)/3)
   
    if(media >= 7):
        print("Aprovado(a)")

    if(media < 7):
        print("Reprovado(a)")

    if(media == 10):
        print("Reprovado(a)")

if __name__ == "__main__":
    main()