from Pessoa import Pessoa

class Funcionario(Pessoa):

    def __init__(self, idFuncionario, salario, setor, cargo, **kwargs):
        super().__init__(**kwargs)
        self._idFuncionario = idFuncionario
        self._salario = salario
        self._setor = setor
        self._cargo = cargo

    @property
    def idFuncionario(self):
        return self.idFuncionario

    # setter
    @idFuncionario.setter
    def idFuncionario(self, idFuncionario):
        self._idFuncionario = idFuncionario

    @property
    def salario(self):
        return self.salario

    # setter
    @salario.setter
    def salario(self, salario):
        self._salario = salario

    @property
    def setor(self):
        return self.setor

    # setter
    @setor.setter
    def setor(self, setor):
        self._setor = setor

    @property
    def cargo(self):
        return self.cargo

    # setter
    @cargo.setter
    def cargo(self, cargo):
        self._cargo = cargo

    def mudarSalario(self, novoSalario):
        if self._salario == novoSalario:
            print('O salário não pode ser igual ao anterior')
        else:
            self._salario = novoSalario
            print('Salário Mudado')

    def mudarSetor(self, novoSetor):
        if self._setor == novoSetor:
            print('O setor não pode ser igual ao anterior')
        else:
            self._setor = novoSetor
            print('Setor Mudado')

    def mudarCargo(self, novoCargo):
        if self._cargo == novoCargo:
            print('O cargo não pode ser igual ao anterior')
        else:
            self._cargo = novoCargo
            print('Cargo Mudado')