def main():

    salHora = float(input("Quantos reais ganahs por hora? » "))
    horas = float(input("Quantas horas por mês trabalhas?"))

    salarioBruto = (salHora * horas)
    iR = salarioBruto * 0.11
    inss = salarioBruto * 0.08
    sindicato = salarioBruto * 0.05
    salarioLiquido = salarioBruto - iR - inss - sindicato

    print("Seu salário bruto foi » {}" .format(salarioBruto))
    print("Seu desconto INSS foi » {}" .format(inss))
    print("Seu desconto sindicato foi » {}" .format(sindicato))
    print("Seu salário liquido foi » {}" .format(salarioLiquido))

if __name__ == "__main__":
    main()