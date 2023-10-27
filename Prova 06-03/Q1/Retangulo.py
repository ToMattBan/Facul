class Retangulo:

    def __init__(self, Lado1, Lado2):
        self._Lado1 = Lado1
        self._Lado2 = Lado2

    def get_Lado1(self):
        return self._Lado1

    def set_Lado1(self, Lado1):
        self._Lado1 = Lado1

    def get_Lado2(self):
        return self._Lado2

    def get_Lado2(self):
        return self._Lado2

    def calculaArea(self, Lado1, Lado2):
        area = Lado1 * Lado2
        print(area)
    
    def calcluaPerimetro(self, Lado1, Lado2):
        perimetro = (2 * Lado1) + (2 * Lado2)
        print(perimetro)