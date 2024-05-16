const age = 25;
let price = null;

if (age > 21) {
  price = 100;
} else if (age > 15) {
  price = 50;
} else {
  price = 0;
}

document.body.innerHTML += `<p>${price}</p>`;




