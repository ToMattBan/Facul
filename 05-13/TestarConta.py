from Conta import Conta

if __name__ == '__main__':
    conta = Conta('125-9', 'Joana', 100, 1000)
    print('Nº conta »   ' + str(conta.numero))
    print('Titular  »   ' + str(conta.titular))
    print('Saldo    »   ' + str(conta.saldo))
    print('Limite   »   ' + str(conta.limite))
    conta.depositar(400)
    print('Saldo    »   ' + str(conta.saldo))
    conta.depositar(50)
    conta.sacar(100)
    conta.imprimirExtrato()
    conta.sacarComRetorno(8000)
    conta.imprimirExtrato()