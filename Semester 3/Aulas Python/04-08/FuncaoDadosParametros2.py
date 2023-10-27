def main():
    def dados(nome, idade=None):
        print("Nome: {}".format(nome))
        if(idade is not None):
            print("Idade: {}".format(idade))
        else:
            print("Idade não informada!")

    #dados("Aula")
    dados("Julia", idade=8)

if __name__ == "__main__":
    main()