print("Vamos calcular seu IMC?")
altura = int(input("Insira sua altura (em cm) » ")) / 100
peso = int(input("Insira seu peso » "))
idade = input("Insira sua idade » ")
imc = round(peso/(altura*altura), 2)

print(imc)

atencao = imc > 40

if atencao:
    atencao = "sobrepeso ou pior"
    pass
else:
    atencao = "saudável"
    pass

print("Idade foi de {}, o IMC foi {} e está {}".format(idade, imc, atencao))