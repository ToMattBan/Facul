def main():

    loja = {
        "razaoSocial": "",
        "nomeFantasia": "",
        "numFuncionarios": ""
    }

    loja["razaoSocial"] = input("Insira o razão social da loja » ")
    loja["nomeFantasia"] = input("Insira o nome fantasia da loja » ")
    loja["numFuncionarios"] = input("Insira o número de funcionários da loja » ")

    print('A sua loja cadastrada com a razão social "{}" foi cadastrada com o nome fantasia de "{}" e possui atualmente {} funcionários' .format(loja["razaoSocial"], loja["nomeFantasia"], loja["numFuncionarios"]))

if __name__ == "__main__":
    main()