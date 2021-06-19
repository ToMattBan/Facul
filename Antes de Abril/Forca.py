from operator import index

def main():

    print("*********************")
    print("****Jogo da Forca****")
    print("*********************")

    palavra_secreta = "AulaDeHoje" 

    acertou = False
    enforcou = False

    while(not acertou and not enforcou):
        chute = input("Escolha uma letra » ")
        posicao = 0

        for letra in palavra_secreta:
            if (chute.upper() == letra.upper()):
                print("Acerto Mizerávi, a letra {} tava na posição {}".format(letra, index(posicao)))
            posicao = posicao + 1
        else:
                print("ERRRROOOOOUUUUUUUU")

        print("Jogando...")

    print("Fim de Jogo")
    
if __name__ == "__main__":
    main()