class Aluno:

    def __init__(self, nome, curso, tempoSemDormir):
        self._nome = nome
        self._curso = curso
        self._tempoSemDormir = tempoSemDormir
    
    @property
    def nome(self):
        return self.nome

    # setters
    @nome.setter
    def nome(self, nome):
        self._idEmpresa = nome

    @property
    def curso(self):
        return self.curso

    # setter
    @curso.setter
    def curso(self, curso):
        self._curso = curso

    @property
    def tempoSemDormir(self):
        return self.tempoSemDormir

    # setter
    @tempoSemDormir.setter
    def tempoSemDormir(self, tempoSemDormir):
        self._tempoSemDormir = tempoSemDormir

    def estudar(self, horas):
        self._tempoSemDormir += horas

    def dormir(self, horas):
        self._tempoSemDormir -= horas
        if (self._tempoSemDormir < 0):
            self.tempoSemDormir = 0