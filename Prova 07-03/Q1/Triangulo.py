class Triangulo:

    def __init__(self, LadoA, LadoB, LadoC):
        self._LadoA = LadoA
        self._LadoB = LadoB
        self._LadoC = LadoC
    
    @property
    def LadoA(self):
        return self.LadoA

    # setters
    @LadoA.setter
    def LadoA(self, LadoA):
        self._idEmpresa = LadoA

    @property
    def LadoB(self):
        return self.LadoB

    # setter
    @LadoB.setter
    def LadoB(self, LadoB):
        self._LadoB = LadoB

    @property
    def LadoC(self):
        return self.LadoC

    # setter
    @LadoC.setter
    def LadoC(self, LadoC):
        self._LadoC = LadoC

    def calcularPerímetro(self, ladoA, ladoB, ladoC): 
        perimetro = int(ladoA) + int(ladoB) + int(ladoC)
        print('O perimetro é » {}'.format(perimetro))

    def getMaiorLado(self): 
        maiorLado = self._LadoA

        if (self._LadoB > maiorLado):
            maiorLado = self._LadoB

        if (self._LadoC > maiorLado):
            maiorLado = self._LadoC

        print('O maior lado é » {}'.format(maiorLado))
