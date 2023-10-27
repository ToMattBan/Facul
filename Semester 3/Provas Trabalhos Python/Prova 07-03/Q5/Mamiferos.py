class Mamiferos():

    def __init__(self, nomeCientifico, regiao, familia):
        self._nomeCientifico = nomeCientifico
        self._regiao = regiao
        self._familia = familia

    @property
    def nomeCientifico(self):
        return self._nomeCientifico

    @nomeCientifico.setter
    def nomeCientifico(self, nomeCientifico):
        self._nomeCientifico = nomeCientifico

    @property
    def regiao(self):
        return self._regiao

    @regiao.setter
    def regiao(self, regiao):
        self._regiao = regiao

    @property
    def familia(self):
        return self._familia

    @familia.setter
    def familia(self, familia):
        self._familia = familia

    def mudarRegiao(self, regiao):
        self._regiao = regiao