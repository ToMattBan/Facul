def main():

    def teste(variavel, *args):
        print("Primeiro Argumento: {}".format(variavel))

        for i in args:
            print("Outros Argumentos: {}".format(i))

    #teste("Variável 1")
    teste("Varilável 1", "A", "B", "C")

if __name__ == "__main__":
    main()