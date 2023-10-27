class Empregado:

    def __init__(self, firstName, secondName, monthPayment):
        self._firstName = firstName
        self._secondName = secondName
        self._mothPayment = monthPayment

    def get_firstName(self):
        return self._firstName

    def set_firstName(self, firstName):
        self._firstName = firstName

    def get_secondName(self):
        return self._secondName

    def set_secondName(self, secondName):
        self._secondName = secondName

    def get_monthPayment(self):
        return self._monthPayment

    def set_monthPayment(self, monthPayment):
        self._monthPayment = monthPayment

    def fullName(self, firstName, secondName):
        self._fullName = '{} {}'.format(firstName, secondName)
        print(self._fullName)

    def extract(self, fullName, monthPayment):
        extract = fullName + ' - Salário R${}'.format(str(monthPayment))
        print(extract)

    def aumentarSalario(self, percent):
        newPaymenth = float(self._mothPayment) + (float(self._mothPayment) / 100 * float(percent))
        self._mothPayment = newPaymenth
        print(round(self._mothPayment, 2))