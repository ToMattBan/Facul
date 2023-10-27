def main():

    pet = {
        "nome": "",
        "espécie": "",
        "raça": "",
        "idade": "",
        "dono": ""
    }

    pet["nome"] = input("Insira o nome do pet » ")
    pet["espécie"] = input("Insira o espécie do pet » ")
    pet["raça"] = input("Insira a raça do pet » ")
    pet["idade"] = input("Insira a idade do pet » ")
    pet["dono"] = input("Insira o nome do dono do pet » ")

    print("")
    for key in pet:
        print(key.capitalize() + " » " + pet[key])

if __name__ == "__main__":
    main()