class Funcionario:

    def __init__(self, nome, salario):
        self._nome = nome
        self._salario = salario
    
    @property
    def nome(self):
        return self.nome

    # setters
    @nome.setter
    def nome(self, nome):
        self._idEmpresa = nome

    @property
    def salario(self):
        return self.salario

    # setter
    @salario.setter
    def salario(self, salario):
        self._salario = salario

    def aumentarSalario(self, percentualDeAumento):
        self._salario = self._salario + (self._salario * (percentualDeAumento / 100))
        print("Salário Novo do {} é R${:.2f}".format(self._nome, self._salario))

