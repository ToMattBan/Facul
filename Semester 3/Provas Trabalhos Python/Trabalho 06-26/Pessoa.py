class Pessoa():
##SUPERCLASSE
    def __init__(self, nome, idade, sexo, cpf, email):
        self._nome = nome
        self._idade = idade
        self._sexo = sexo
        self._cpf = cpf
        self._email = email

    @property
    def nome(self):
        return self._nome

    @nome.setter
    def nome(self, nome):
        self._nome = nome

    @property
    def idade(self):
        return self._idade

    @idade.setter
    def idade(self, idade):
        self._idade = idade

    @property
    def sexo(self):
        return self._sexo

    @sexo.setter
    def sexo(self, sexo):
        self._sexo = sexo

    @property
    def cpf(self):
        return self._cpf

    @cpf.setter
    def cpf(self, cpf):
        self._cpf = cpf

    @property
    def email(self):
        return self._email

    @email.setter
    def email(self, email):
        self._email = email

    def fazerAniversario(self):
        self._idade = self._idade + 1

    def alterarEmail(self, novoEmail):
        self._email = novoEmail

    def alterarNome(self, novoNome):
        self._nome = novoNome