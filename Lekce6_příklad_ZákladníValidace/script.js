const email= prompt('Zadej email')
const elInfo = document.querySelector("#info")

console.log(validator.isEmail(email))

validator.isCreditCard('4125010001000208');

if(validator.isEmail(email)) {
    elInfo.style.backgroundColor = "green"
    elInfo.textContent = "E-mail v pořádku"
} else { 
    elInfo.style.backgroundColor = "red"
    elInfo.textContent = "Neplatný e-mail"
}

