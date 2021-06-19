def main():
    def calculadora(x, y):
        return {"soma": x + y, "subtração": x - y}

    resultados = calculadora(1, 2)
    print(type(resultados))

    for i in resultados:
        print("{}: {}".format(i, resultados[i]))


if __name__ == "__main__":
    main()
