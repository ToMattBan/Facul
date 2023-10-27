class Filme:

    def __init__(self, title, resume, duration):
        self._title = title
        self._resume = resume
        self._duration = duration

    def get_title(self):
        return self._title

    def set_title(self, title):
        self._title = title

    def get_resume(self):
        return self._resume

    def set_resume(self, resume):
        self._resume = resume

    def get_duration(self):
        return self._duration

    def set_duration(self, duration):
        self._duration = duration

    def mostrarFilme(self):
        print('{} - {}'.format(self._title, self._resume))
    
    def horaMinuto(self):
        hours = int(self._duration / 60)
        minutes = (self._duration - (hours * 60))
        print('{}:{:02d}'.format(hours, minutes))