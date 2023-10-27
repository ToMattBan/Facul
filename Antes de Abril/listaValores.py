def main():

    print("LISTA DE COMPRAS PARA VITAMINA")
    print("")
    lista = ["banana", "maçã", "caju"]

    print(lista)
    print("")

    print("OH NÃO, FALTOU UMA FRUTA, VAMOS ADICIONAR LARANJA")
    print("")

    lista.append("laranja")

    print(lista)
    print("")

    print("Ufa, bem melhor, mas sabe, eu não curto maçã... Tira?")
    print("")

    lista.remove("maçã")

    print(lista)
    print("")

if __name__ == "__main__":
    main()