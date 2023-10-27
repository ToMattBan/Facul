from Conta import Conta

if __name__ == '__main__':
    conta2 = Conta('125-9', 'Juan', 1000, 5000)
    conta3 = Conta('345-9', 'Miguel', 2000, 10000)
    conta2.imprimirExtrato()
    conta3.imprimirExtrato()
    conta2.transferir(conta3, 500)
    conta2.imprimirExtrato()
    conta3.imprimirExtrato()
