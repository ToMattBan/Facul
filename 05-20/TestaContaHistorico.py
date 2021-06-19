from Conta import Conta

if __name__ == '__main__':
    conta = Conta('125-9', 'Joana', 100, 1000)
    conta.depositar(100)
    conta.sacar(20)
    conta.imprimirExtrato()
    conta.historico.imprime()