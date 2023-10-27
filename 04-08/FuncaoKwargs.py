def main():

    def myfunction(**kwargs):

        for i, valor in kwargs.items():
            print("{0} = {1}".format(i,valor))
    myfunction(Nome="Julia", Idade="23", Cidade="Blumenau")

if __name__ == "__main__":
    main()