def main():

    def calculavelocidade(espaco, tempo):
        velocidade = espaco / tempo
        return velocidade

    resultado = calculavelocidade(100, 20)
    print(resultado)

    print("------------------------------------")

    def calculavelocidade(espaco, tempo):
        velocidade = espaco / tempo
        if (velocidade is not None):
            return velocidade
        else:
            return 0
    valor = calculavelocidade(100,20)
    print(valor)


if __name__ == "__main__":
    main()