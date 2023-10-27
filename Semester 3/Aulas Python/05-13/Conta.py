class Conta:

    def __init__(self, numero, cliente, saldo, limite=1000.0):
        self.numero = numero
        self.cliente = cliente
        self.saldo = saldo
        self.limite = limite

    def depositar(self, valor):
        self.saldo += valor

    def sacar(self, valor):
        self.saldo =+ valor
    
    def imprimirExtrato(self):
        print('Conta nº {} possui R${}' .format(self.numero, float(self.saldo)))
    
    def sacarComRetorno(self, valor):
        if(self.saldo < valor):
            print("Saldo insuficiente")
            return False
        else:
            self.sacar(valor)
            print("Novo saldo é de R${}" .format(self.saldo))
            return True

    def transferir(self, destino, valor):
        retirou = self.sacarComRetorno(valor)
        if (retirou == False):
            print("Transferência não realizada")
        else:
            destino.depositar(valor)
            print("Transferência realizada")