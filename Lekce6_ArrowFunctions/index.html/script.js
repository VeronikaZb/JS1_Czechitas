//importy

// def funkcí

//zbytek kodu


const pozdrav = (jmeno, pracPozice) => `Ahoj uzivateli ${jmeno} (${pracPozice})`

const jePlnolety = (vek) => {
    if(vek >= 18) {
        return true
    }
        
    return false
} 

console.log(pozdrav("Michal", "IT Lektor"))
console.log(pozdrav("Katka", "CEO"))
console.log(pozdrav("Jarmila", "CTO"))

console.log(jePlnolety(20))
console.log(jePlnolety(15))