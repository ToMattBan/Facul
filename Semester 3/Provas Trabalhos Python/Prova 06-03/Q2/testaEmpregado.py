from Empregado import Empregado

if __name__ == '__main__':
    employ1 = Empregado('Matheus', 'Silva', 1259.85)
    employ2 = Empregado('Marcos', 'Oliveira', 1578.75)

    print(employ1._mothPayment)
    employ1.fullName(employ1._firstName, employ1._secondName)
    employ1.extract(employ1._fullName, employ1._mothPayment)
    employ1.aumentarSalario(10)
    print('')
    print(employ2._mothPayment)
    employ2.fullName(employ2._firstName, employ2._secondName)
    employ2.extract(employ2._fullName, employ2._mothPayment)
    employ2.aumentarSalario(5)