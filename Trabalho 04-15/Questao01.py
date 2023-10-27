def main():

    nome = input("Insira seu nome » ")
    senha = input("Insira sua senhaa » ")

    while (nome == senha):
        print("Vish mano, não pode ser igual, tenta de novo!a")
        print("")
        nome = input("Insira seu nome » ")
        senha = input("Insira sua senhaa » ")

    print("Cadastro Realizado com sucesso")

if __name__ == "__main__":
    main()