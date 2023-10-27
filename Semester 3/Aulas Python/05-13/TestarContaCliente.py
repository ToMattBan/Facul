from Conta import Conta
from Cliente import Cliente

if __name__ == '__main__':
    cliente = Cliente('Joana', "D'arc", '096.698.652-98')
    conta = Conta('125-9', cliente, 100, 1000)
    print('Número da conta  » {}' .format(conta.numero))
    print('Titular da conta » {}' .format(conta.cliente.nome))