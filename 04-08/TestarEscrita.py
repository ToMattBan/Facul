
def main():

    arquivo = open("arquivo.txt", "w")
    arquivo.write("banana")
    arquivo.write("\n")
    arquivo.write("alface")
    arquivo.write("\n")
    arquivo.write("morango")
    arquivo.close()

if __name__ == "__main__":
    main()
