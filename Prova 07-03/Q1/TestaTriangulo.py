from Triangulo import Triangulo

if __name__ == '__main__':
    ladoA = input("Digite o LadoA » ")
    ladoB = input("Digite o LadoA » ")
    ladoC = input("Digite o LadoA » ")
    
    Tri1 = Triangulo(ladoA, ladoB, ladoC)
    Tri1.calcularPerímetro(ladoA, ladoB, ladoC)
    Tri1.getMaiorLado()