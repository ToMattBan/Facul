from Mamiferos import Mamiferos

class Girafa(Mamiferos):

    def __init__(self, nome, altura, sexo, **kwargs):
        super().__init__(**kwargs)
        self._nome = nome
        self._altura = altura
        self._sexo = sexo

    @property
    def nome(self):
        return self._nome

    @nome.setter
    def nome(self, nome):
        self._nome = nome

    @property
    def altura(self):
        return self._altura

    @altura.setter
    def altura(self, altura):
        self._altura = altura

    @property
    def sexo(self):
        return self._sexo

    @sexo.setter
    def sexo(self, sexo):
        self._sexo = sexo

    def mudarRegiao(self, regiao):
        return super().mudarRegiao(regiao)