/*
const pocetHodin = Number(prompt("Zadej pocet hodin zamestnance")) // 100 => "100"
const pocetHodinPrescasu = Number(prompt("Zadej pocet hodin prescasu")) // 10 => "10"
// toString(), parseInt(), parseFloat()
const hodinovka = 200
const vypocetMzdy = (pocetHodin * hodinovka) + (pocetHodinPrescasu * hodinovka + 100)
const celkovyPocetHodin = pocetHodin + pocetHodinPrescasu

document.body.innerHTML = "<p>Zamestnance odpracoval - " + celkovyPocetHodin + " hodin</p>"
document.body.innerHTML += "<p>Zamestnance dostane plat - " + vypocetMzdy + " Kc.</p>"
*/


/*Představte si, že vyrábíte registrační systém na očkování proti COVID-19. U každého registrovaného chceme evidovat jméno a věk.
Vytvořte webovou stránku, která se uživatele zeptá nejdříve na jméno a poté na věk. Tyto hodnoty si uložte do smysluplně pojmenovaných proměnných. Nezpomeňte věk převést na číslo.
Poté, co uživatel zadá všechny údaje, vypište do stránky odstavec s obsahem ve tvaru
Květoslav Voňavý, věk: 67*/

/*const jmeno = prompt('Zadej jméno');
const vek = Number(prompt('Zadej věk'));*/


/*Vytvořte webovou stránku, která uživatele požádá o jeho hodinovou sazbu v korunách a spočítá jeho hrubou mzdu za předpokladu, 
že pracuje 8 hodin denně 21 dní v měsíci. Do stránky vypište výsledek zabalený do nějaké přívětivé formulace. 
Dbejte na to, abyste korektně převedli uživatelem zadanou hodnotu na číslo.
Nechte uživatele zadat nejen hodinovou sazbu, ale také počet hodin a dní v měsíci. Opět dejte pozor na správnou konverzi.*/

/*const hodinovaSazba = Number(prompt('Uveď svoji hodinovou sazbu v Kč'));
const pocetHodin = Number(prompt('Uveď počet hodin za měsíc'));
const pocetDnu = Number(prompt('Uveď počet dnů za měsíc'));
const hrubaMzda = hodinovaSazba * pocetHodin * pocetDnu;

document.body.innerHTML = 'Vaše hrubá mzda činí: ' + hrubaMzda;*/



/*const adresa = "Opletalova 33, 169 00 Praha 6"

const adresa = {
    //vlastnost : hodnota
    ulice: "Opletalova",
    "cislo popisne": 33,
    psc: "169 00",
    mesto: "Praha 6",
    gps: {
        x: 12312.1231224,
        y: 12314.123123
    }
}

adresa.ulice = "Fibichova"
adresa.ctvrt = "Dejvice"

document.body.innerHTML = "<p>Ulice: " + adresa.ulice + "</p>" + "<p>Cislo popisne: " + adresa["cislo popisne"] + "</p>"

console.log(adresa)
console.log(adresa.gps.y)
*/

/*Mějme následující objekt představující inzerát na stránkách nějaké realitní kanceláře.

Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte následující úkoly.

Pomocí tečkové notace vypište do stránky dispozici bytu.
Vypište do stránky čistý nájem bez poplatků.
Vypište do stránky celý objekt představující výměru bytu.
Do separátních proměnných uložte město a městskou část. Vypište je do stránky.
Změnte stav inzerátu z 'free' na 'taken'.*/

const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };
  
  const mesto = apartment.city;
  const mestskaCast = apartment.district;
  apartment.status = 'taken';
    
  document.body.innerHTML += "<p>Dispozice bytu: " + apartment.disposition + "</p>";
  document.body.innerHTML += "<p>Nájem: " + apartment.price.rent + apartment.price.currency + "</p>";
  document.body.innerHTML += "<p>Plocha bytu: " + apartment.area.floorage + apartment.area.units + "</p>";
  document.body.innerHTML += "<p>Město: " + mesto + "</p>";
  document.body.innerHTML += "<p>Městská část: " + mestskaCast + "</p>";
  document.body.innerHTML += "<p>Status: " + apartment.status + "</p>";
  
  
  /*V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. 
  Uvažte, jaké vlastnosti může taková kniha mít. Rozhodně budeme chtít název, autora a počet stran. 
  Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i vnořený objekt.
  Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.`*/
    
  const book1 = {
    title: 'How To Swim With Sharks',
    author: 'John Lutton',
    pages: 334,
    format: 'Hardcover',
    genres: 'Drama, Crime',
    Language: 'English',
    Editions: {
      firstPublished: 'Published March 1, 2012 by Byron Bay Publishing Group',
      secondPublished: 'Published June 1, 2021 by Byron Bay Publishing Group',
      isbnFirstPublished: 'ISBN 97203928930203',
      isbnSecondPublished: 'ISBN 9720392122221',
    },
  }
  
  
  const book2 = {
    title: 'Manana es muy dia bonita',
    author: 'Rodriguez Perez ',
    pages: 554,
    format: 'Hardcover',
    genres: 'Romantic',
    Language: 'Spanish',
    Editions: {
      firstPublished: 'Published December 6, 2001 by Baranquilla Agua Publishing Group',
      secondPublished: 'Published June 1, 2021 by Baranquilla Agua Publishing Group',
      isbnFirstPublished: 'ISBN 123242928930203',
      isbnSecondPublished: 'ISBN 13243392122221',
    },
  }
  
  
  Pokračujme v našem registračním systému na očkováni. Zatím se umíme uživatele zeptat na jméno a věk.
  
  Vytvořte objekt person, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu
  {
  name: 'Květoslav Voňavý',
  age: 67,
  }
  Přidejte do objektu person údaj o tom, v jakém jazyce si uživatel přeje komunikovat. Zjistěte jej z objektu window.
  Poté, co uživatel zadá všechny údaje, vypište do stránky objekt person se všemi jeho vlastnostmi v nějakém hezkém formátu
  a zkontrolujte, že obsahuje správné informace.