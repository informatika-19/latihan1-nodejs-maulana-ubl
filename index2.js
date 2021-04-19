const nilai = 80
let nilaiHuruf = ''
let ket = ''

// logikacabang
 if (nilai >= 8.5) {
     nilaiHuruf = 'A'
     ket = 'Sangat Baik'
 } else if (nilai >=75) {
    nilaiHuruf = 'B'
    ket = 'Baik'
 } else if (nilai >= 65) {
     nilaiHuruf = 'C'
     ket = 'Cukup'
 } else if (nilai >= 55) {
    nilaiHuruf = 'D'
    ket = 'Buruk'
 } else {
     nilaiHuruf = 'E'
     ket = 'Sangat Buruk'
 }
 console.log('Nilai Anda' + nilaiHuruf + '(' + ket + ')')