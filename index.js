const RankTable = {
    Ferro: (SaldoVitorias) => {
        return SaldoVitorias <= 10
    },
    Bronze: (SaldoVitorias) => {
        return SaldoVitorias > 10 & SaldoVitorias <= 20 
    },
    Prata: (SaldoVitorias) => {
        return SaldoVitorias > 20 & SaldoVitorias <= 50 
    },
    Ouro: (SaldoVitorias) => {
        return SaldoVitorias > 50 & SaldoVitorias <= 80 
    },
    Diamante: (SaldoVitorias) => {
        return SaldoVitorias > 80 & SaldoVitorias <= 90 
    },
    Lendário: (SaldoVitorias) => {
        return SaldoVitorias > 90 & SaldoVitorias <= 100 
    },
    Imortal: (SaldoVitorias) => {
        return SaldoVitorias > 100
    }
}

const Victories = 100
const Defeats = 50
const SaldoVitorias = Victories - Defeats
let CurrentElo = "Ferro"

for (let key in RankTable) {
    if (RankTable[key](SaldoVitorias)) {CurrentElo = key; break}

}

console.log(`O Herói tem saldo de ${SaldoVitorias} está no nível de ${CurrentElo}`)