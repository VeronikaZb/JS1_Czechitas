

//Cvičení: Práce s řetězci, Vlastnosti a metody:
/*V JavaScriptovém programu si založte proměnnou title a uložte do 
ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.
Vypište do stránky počet znaků názvu.
Vypište název filmu převedený na velká písmena.
Vypište z názvu prvních pět písmen.
Vypište z názvu posledních pět písmen.

const title = prompt('Zadej film')

document.body.innerHTML += `
    <p>${title.length}</p>
    <p>${title.toUpperCase()}</p>
    <p>${title.slice(0, 5)}</p>
    <p>${title.slice(-5)}</p>
`
*/

/*Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

jmeno.prijmeni@domena
Tedy například:

petr.novak@gmail.com
romana.nejedla@czechitas.cz
slavomir.ponuchalek@yahoo.com
Postupujte dle následujících kroků.

Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
Pomocí metody slice získejte z e-mailu první část představující uživatelské jméno uživatele.
Dále z e-mailu získejte název domény tedy například gmail.com.
Ze získaných informací vytvořte objekt, který bude vypadat například takto:

const parsedEmail = {
    userName: 'slavomir.ponuchalek',
    domain: 'yahoo.com',
  };


const email = prompt('Zadej email: ')
const atIndex = '@'
const parsedEmail = {
    atIndex: '${email.indexOf(@)}'
    userName: '${email.slice'
    domain: 'gmail.com'
} 

*/

//Cvičení: podmínky
//Registrance na očkování

//V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. 
/*Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel zadal také heslo. 
To bychom v pozdější verzi aplikaci mohli použít například k přihlášení do systému.
Vytvořte novou stránku, nebo pokračujte ve stránce z předchozí lekce pro registraci na očkování.

Nejdříve nechte uživatele zadat všechny hodnoty, tedy jméno, věk i heslo. Uložte si je do dobře pojmenovaných proměnných
Napište první podmínku, ve které zkontrolujte, že věk uživatele je větší nebo roven 65. Pokud ano, vypište do stránky „věk v pořádku“.
Pokud uživateli není alespoň 65 let, vypište „nízký věk“.
Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší než osm znaků. Pokud není, vypište „slabé heslo“. Heslo se bude
kontrolovat pouze v případě, kdy uživatel splnil první podmínku (věk alespoň 65 let). */

/*
let jmeno = prompt('Zadej jmeno')
let vek = prompt('Zadej věk')
let heslo = prompt('Zadej heslo')


if (vek >= 65) {
    document.body.innerHTML += '<p> Věk je v pořádku </p>'
        if (heslo.length <= 8) {
        document.body.innerHTML += '<p>slabé heslo</p>' 
        }
     } else {
    document.body.innerHTML += '<p>nízký věk</p>'
    }

*/

//Cena vstupenky
//Pokusme se o základ jednoduchého rezervačního sestému pro vstupenky do divadla.

let vek = prompt('Zadej věk')
const plnaCena = 12

if (vek < 6) {
    document.body.innerHTML += '<p> Vstupné je zdarma</p>'
    } else if (vek >= 6 && vek < 27) {
            document.body.innerHTML += '<p> Vstupné je: ' + Math.round(plnaCena * 65 / 100) + '</p>'
    } else if (vek >= 27 && vek < 65) {
            document.body.innerHTML += '<p> Vstupné je: ' + plnaCena + '</p>' 
    } else if (vek >= 65) {
            document.body.innerHTML += '<p> Vstupné je: ' + Math.round(plnaCena * 50 / 100) + '</p>'
 } else {
        document.body.innerHTML += '<p> ERROR, špatně zadaná hodnota </p>'
}

