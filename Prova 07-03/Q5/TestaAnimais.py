from Mamiferos import Mamiferos
from Girafa import Girafa

if __name__ == "__main__":
    Gir1 = Girafa('Mimosa', 4, 'fêmea', nomeCientifico = 'Tippelskirchi', regiao = 'África', familia = 'Giraffa')
    Gir1.mudarRegiao('Tazmânia')
    print(Gir1._regiao)