from Funcionario import Funcionario
from Empresa import Empresa
from Impostos import Impostos
from Movimentacoes import Movimentacoes
from NotasFiscais import NotasFiscais

if __name__ == '__main__':
    Func1 = Funcionario(1, 1000, 'Qualidade', 'Analista', nome="João", idade=28, sexo="M", cpf=16985423691, email='joaograndao@email.com')
    Func1.mudarSalario(2000)
    Func1.mudarSetor('Expedição')
    Func1.mudarCargo('Operador de Empilhadeira')
    Func1.fazerAniversario()
    Func1.alterarEmail('joaodaempresa@profissional.com')
    Func1.alterarNome('Joaquim')
    print('')

    Empr1 = Empresa(1, 'Jaqueslauzis Alheios', 12, 7852, 6486)
    Empr1.addFuncionario()
    Empr1.calcLucro()    
    Empr1.addImposto()
    print('')

    Imp1 = Impostos(1, 'IR', 1000, 'Federal', 'Anual')
    Imp1.mudarFrequencia()
    Imp1.mudarValor()
    Imp1.mudarAplicabilidade()
    print('')

    Mov1 = Movimentacoes(1, 1000, 'Jaques Alheios', 'Caixas', 12)
    Mov1.addMovimentacao()
    Mov1.addConteudo()
    Mov1.addQuantidade()
    print('')

    NF1 = NotasFiscais(1, '', 1000, 12, 'Alimeta-me INC')
    NF1.addIntems()
    NF1.addFrete()
    NF1.addParte()