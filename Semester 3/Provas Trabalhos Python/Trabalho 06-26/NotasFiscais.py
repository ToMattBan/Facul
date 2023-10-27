class NotasFiscais:

    def __init__(self, idNota, itens, valorTotal, valorFrete, parte):
        self._idNota = idNota
        self._itens = itens
        self._valorTotal = valorTotal
        self._valorFrete = valorFrete
        self._parte = parte

    @property
    def idNota(self):
        return self.idNota

    # setter
    @idNota.setter
    def idNota(self, idNota):
        self._idNota = idNota

    @property
    def itens(self):
        return self.itens

    # setter
    @itens.setter
    def itens(self, itens):
        self._itens = itens

    @property
    def valorTotal(self):
        return self.valorTotal

    # setter
    @valorTotal.setter
    def valorTotal(self, valorTotal):
        self._valorTotal = valorTotal

    @property
    def valorFrete(self):
        return self.valorFrete

    # setter
    @valorFrete.setter
    def valorFrete(self, valorFrete):
        self._valorFrete = valorFrete

    @property
    def parte(self):
        return self.parte

    # setter
    @parte.setter
    def parte(self, parte):
        self._parte = parte

    def addIntems(self):
        items = []
        acabou = False
        while (acabou == False):
            item = input('Digite o nome do item » ')
            self._itens = self._itens + ' ' + item
            items.append(item)
            print('Item adicionado')
            mais = input('Deseja mais itens? (s/n) ')
            if mais == 'n':
                acabou = True
        print('Foram adicionados os seguintes itens » {}'.format(items))

    def addFrete(self):
        print('Fruto Adicionado')

    def addParte(self):
        print('Parte Adicionada')