var jmeno1 = 'Michal'
let jmeno2 = 'Oksana'
const jmeno3 = 'Tomas'

document.body.innerHTML = jmeno1 + ' ' + jmeno2 + ' ' + jmeno3


let hodinovka = 100
let pocetHodin = 160
let vyplata = hodinovka * pocetHodin

hodinovka = 1000

vyplata = hodinovka * pocetHodin

document.body.innerHTML += vyplata
document.body.innerHTML += 'Tady je další text'