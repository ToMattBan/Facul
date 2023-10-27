import datetime

class Historico:

    def __init__(self):
        self.data_abertura = datetime.date.today()
        self.transacoes = []

    def imprime(self):
        data_em_texto = "{}/{}/{}".format(self.data_abertura.day, self.data_abertura.month, self.data_abertura.year)
        print("Data Abertura: {}" .format(data_em_texto))
        print("Transações Efetuadas » ")
        for t in self.transacoes:
            print("-", t)