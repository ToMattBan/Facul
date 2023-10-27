def main():

    nome = input("Insira seu nome » ")

    while len(nome) <= 3:
        print("O nome deve conter mais que três caracteres")
        nome = input("Insira novamente seu nome » ")

    print("")

    idade = int(input("Insira sua idade » "))

    while idade < 0 or idade > 100:
        print("A idade deve estar entre 0 e 100 anos")
        idade = int(input("Insira novamente sua idade » "))

    print("")

    salario = float(input("Insira seu salário » "))

    while salario <= 0:
        print("O salário deve ser maior que 0")
        salario = float(input("Insira novamente seu salário » "))

    print("{} tem {} anos e recebe R${}" .format(nome, idade, salario))
    
if __name__ == "__main__":
    main()