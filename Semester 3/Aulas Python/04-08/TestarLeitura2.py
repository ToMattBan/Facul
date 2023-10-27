
def main():

    arquivo = open("arquivo.txt", "r")
    palavras = []
    
    for i in arquivo:
        i = i.strip()
        palavras.append(i)

    print(palavras)
    arquivo.close()

if __name__ == "__main__":
    main()
