from Impostos import Impostos

class Empresa:

    def __init__(self, idEmpresa, nomeFantasia, numFuncionarios, ganhos, despesas):
        self._idEmpresa = idEmpresa
        self._nomeFantasia = nomeFantasia
        self._numFuncionarios = numFuncionarios
        self._ganhos = ganhos
        self._despesas = despesas

    @property
    def idEmpresa(self):
        return self.idEmpresa

    # setter
    @idEmpresa.setter
    def idEmpresa(self, idEmpresa):
        self._idEmpresa = idEmpresa

    @property
    def nomeFantasia(self):
        return self.nomeFantasia

    # setter
    @nomeFantasia.setter
    def nomeFantasia(self, nomeFantasia):
        self._nomeFantasia = nomeFantasia

    @property
    def numFuncionarios(self):
        return self.numFuncionarios

    # setter
    @numFuncionarios.setter
    def numFuncionarios(self, numFuncionarios):
        self._numFuncionarios = numFuncionarios

    @property
    def ganhos(self):
        return self.ganhos

    # setter
    @ganhos.setter
    def ganhos(self, ganhos):
        self._ganhos = ganhos

    @property
    def despesas(self):
        return self.despesas

    # setter
    @despesas.setter
    def despesas(self, despesas):
        self._despesas = despesas

    def addFuncionario(self):
        print('Funcionario Adicionado')

    def calcLucro(self):
        print('Seu Lucro é » {}'.format(self._ganhos - self._despesas))
    
    def addImposto(self):
        print('Imposto Adicionado')