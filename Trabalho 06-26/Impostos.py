class Impostos:

    def __init__(self, idImposto, nome, valor, aplicabilidade, frequencia):
        self._idImposto = idImposto
        self._nome = nome
        self._valor = valor
        self._aplicabilidade = aplicabilidade
        self._frequencia = frequencia

    @property
    def idImposto(self):
        return self.idImposto

    # setter
    @idImposto.setter
    def idImposto(self, idImposto):
        self._idImposto = idImposto

    @property
    def nome(self):
        return self.nome

    # setter
    @nome.setter
    def nome(self, nome):
        self._nome = nome

    @property
    def valor(self):
        return self.valor

    # setter
    @valor.setter
    def valor(self, valor):
        self._valor = valor

    @property
    def aplicabilidade(self):
        return self.aplicabilidade

    # setter
    @aplicabilidade.setter
    def aplicabilidade(self, aplicabilidade):
        self._aplicabilidade = aplicabilidade

    @property
    def frequencia(self):
        return self.frequencia

    # setter
    @frequencia.setter
    def frequencia(self, frequencia):
        self._frequencia = frequencia

    def mudarFrequencia(self):
        print('Frequencia Mudada')

    def mudarValor(self):
        print('Valor Mudado')

    def mudarAplicabilidade(self):
        print('Aplicabilidade Mudada')