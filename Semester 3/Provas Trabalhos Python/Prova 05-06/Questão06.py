def main():

    def somaImposto(taxaImposto, custo):
        print("O novo valor, com imposto, é R${}" .format(float(custo) + (float(custo)/100*float(taxaImposto))))

    somaImposto(78, 100)

if __name__ == "__main__":
    main()