class Livro:

    def __init__(self, title, nPags, pagsLidas):
        self._title = title
        self._nPags = nPags
        self._pagsLidas = pagsLidas

    def get_title(self):
        return self._title

    def set_title(self, title):
        self._title = title

    def get_nPags(self):
        return self._nPags

    def set_nPags(self, nPags):
        self._nPags = nPags

    def get_pagsLidas(self):
        return self._pagsLidas

    def set_pagsLidas(self, pagsLidas):
        self._pagsLidas = pagsLidas

    def verificarProgresso(self):
        perc = round((self._pagsLidas * 100 / self._nPags), 2)
        print('Você já leu {} por cento do livro'.format(perc))