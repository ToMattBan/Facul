from Fatura import Fatura

if __name__ == '__main__':
    fatura1 = Fatura(10, "Favolécio", 5, 78.5)

    fatura1.comprarItem(-5, -8)
    fatura1.comprarItem(5, 8)

    fatura1.imprimeDetalhes()

    fatura1.getValorFaturado(5, 8)