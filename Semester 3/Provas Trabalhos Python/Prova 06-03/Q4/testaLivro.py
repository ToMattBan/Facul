from Livro import Livro

if __name__ == '__main__':
    book = Livro('As Longas Tranças', 850, 64)

    book.verificarProgresso()

    book.set_title('O Pequeno Príncipe')

    book.set_nPags(512)

    book.verificarProgresso()