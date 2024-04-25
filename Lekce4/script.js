/*
const hodnota = prompt("Zadej hodnotu")

document.body.innerHTML += "<p>" + hodnota.trim() + "</p>"
document.body.innerHTML += "<p>" + hodnota.trimEnd() + "</p>"
document.body.innerHTML += "<p>" + hodnota.trimStart() + "</p>"
document.body.innerHTML += "<p>" + hodnota.length + "</p>"
document.body.innerHTML += "<p>" + hodnota.toUpperCase() + "</p>"
document.body.innerHTML += "<p>" + hodnota.toLowerCase() + "</p>"
document.body.innerHTML += "<p>" + hodnota.slice(3, 5) + "</p>"
document.body.innerHTML += "<p>" + hodnota.indexOf("al") + "</p>"
document.body.innerHTML += "<p>" + hodnota.padStart(13, "+420") + "</p>"
document.body.innerHTML += "<p>" + hodnota.padEnd(9, "0") + "</p>"

document.body.innerHTML += `
    <p>${hodnota.padStart(13, "+420")}</p>
    <p>${hodnota.padEnd(9, "0")}</p>
`
*/




//Podmínky 
const pravda = true
const nepravda = false

const vek = 18
const heslo = "simsalabim"

// > >= < <= === !== 
if(vek >= 18) {
    document.body.innerHTML = `Je ti ${vek}, vitej na strance!`
} else {
    document.body.innerHTML = `Je ti ${vek}, musis jeste dospet!`
}

// = === ==
// hodnota dat. typ
if(vek === "18") {
    console.log(true)
} else {
    console.log(false)
}

// hodnota
if(vek == "18") {
    console.log(true)
} else {
    console.log(false)
}


//Podmínky
const vyslednaZnamka = 2

if(vyslednaZnamka === 1) {
    console.log("Vyborny")
} else if(vyslednaZnamka === 2) {
    console.log("Chvalitebny")
} else if(vyslednaZnamka === 3) {
    console.log("Dobry")
} else if(vyslednaZnamka === 4) {
    console.log("Dostatecny")
} else if(vyslednaZnamka === 5) {
    console.log("Nedostatecny")
} else {
    console.log("ERROR: Spatna hodnota")
}


//podmínky a ternární operátory 
const vek = 18

// > >= < <= === !== 
if(vek >= 18) {
    document.body.innerHTML = `Je ti ${vek}, vitej na strance!`
} else {
    document.body.innerHTML = `Je ti ${vek}, musis jeste dospet!`
}

let dospelost = null

if(vek >= 18) {
    dospelost = "dospely"
} else {
    dospelost = "mladenec"
}

dospelost = vek >= 18 ? "dospely" : "mladenec"

console.log(dospelost)