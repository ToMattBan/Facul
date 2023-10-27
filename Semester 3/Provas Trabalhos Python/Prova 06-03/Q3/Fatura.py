class Fatura:

    def __init__(self, num, desc, qtd, price):
        self._num = num
        self._desc = desc
        self._qtd = qtd
        self._price = price

    def get_num(self):
        return self._num

    def set_num(self, num):
        self._num = num

    def get_desc(self):
        return self._desc

    def set_desc(self, desc):
        self._desc = desc

    def get_qtd(self):
        return self._qtd

    def set_qtd(self, qtd):
        self._qtd = qtd

    def get_price(self):
        return self._price

    def set_price(self, price):
        self._price = price

    def comprarItem(self, qtd, price):
        if (qtd < 0):
                self._qtd = 0
        if (price < 0):
                self._price = 0
                print("O Preço deve ser maior que 0")

    def imprimeDetalhes(self):
        print('num   » {}' .format((self.get_num())))
        print('desc  » {}' .format((self.get_desc())))
        print('qtd   » {}' .format((self.get_qtd())))
        print('price » {}' .format((self.get_price())))
    
    def getValorFaturado(self, qtd, price):
        print(qtd * price)