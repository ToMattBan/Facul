class Livro:

    def __init__(self, nome, qtdPaginas, autor, preco):
        self._nome = nome
        self._qtdPaginas = qtdPaginas
        self._autor = autor
        self._preco = preco
    
    @property
    def nome(self):
        return self.nome

    # setters
    @nome.setter
    def nome(self, nome):
        self._idEmpresa = nome

    @property
    def qtdPaginas(self):
        return self.qtdPaginas

    # setter
    @qtdPaginas.setter
    def qtdPaginas(self, qtdPaginas):
        self._qtdPaginas = qtdPaginas

    @property
    def autor(self):
        return self.autor

    # setter
    @autor.setter
    def autor(self, autor):
        self._autor = autor

    @property
    def preco(self):
        return self.preco

    # setter
    @preco.setter
    def preco(self, preco):
        self._preco = preco

    def retornaPreco(self):
        return self._preco

    def mudaPreco(self, novoValor):
        self._preco = novoValor
        print("Novo preço é » {}".format(novoValor))

    def etiqueta(self):
        print('Livro {}, do Autor {}, tem {} páginas e custa R${:.2f}'.format(self._nome, self._autor, self._qtdPaginas, self._qtdPaginas))