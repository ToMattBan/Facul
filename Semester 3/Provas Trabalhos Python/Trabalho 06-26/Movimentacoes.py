class Movimentacoes:

    def __init__(self, idMovimentacao, valor, destino, conteudo, quantidade):
        self._idMovimentacao = idMovimentacao
        self._valor = valor
        self._destino = destino
        self._conteudo = conteudo
        self._quantidade = quantidade

    @property
    def idMovimentacao(self):
        return self.idMovimentacao

    # setter
    @idMovimentacao.setter
    def idMovimentacao(self, idMovimentacao):
        self._idMovimentacao = idMovimentacao

    @property
    def valor(self):
        return self.valor

    # setter
    @valor.setter
    def valor(self, valor):
        self._valor = valor

    @property
    def destino(self):
        return self.destino

    # setter
    @destino.setter
    def destino(self, destino):
        self._destino = destino

    @property
    def conteudo(self):
        return self.conteudo

    # setter
    @conteudo.setter
    def conteudo(self, conteudo):
        self._conteudo = conteudo

    @property
    def quantidade(self):
        return self.quantidade

    # setter
    @quantidade.setter
    def quantidade(self, quantidade):
        self._quantidade = quantidade

    def addMovimentacao(self):
        print('Movimentacao Adicionada')

    def addConteudo(self):
        print('conteudo Adicionado')

    def addQuantidade(self):
        print('Quantidade Adicionada')