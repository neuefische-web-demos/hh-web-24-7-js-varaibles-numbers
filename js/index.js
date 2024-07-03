console.log("läuft");

// old, function-scoped, reassignable, redeclarable
var a = 2;

// block-scoped, reassignable, not redeclarable
let b = 3;

if (b < 3) {
  b = 7;
} else {
  b = 4;
}

// block-scoped, not reassignable, not redeclarable
const c = 4;

const headline = document.querySelector("h1");
headline.classList.add("dark");

// Merksatz, wir benutzen immer const, es sei denn wir brauchen wirklich eine let

///// ------------------

// primitive data-types
const ageNumberTrampoline = 5.75; // number
const einSatz = "beliebige Zeichenfolge"; // string
const boolscherWert = true; // boolean
const nothing = undefined; // undefined, wird i.d.R. durch die Abwesenheit eines Wertes erzeugt
const bewusstNothing = null; // null, bewusste Abwesenheit eines Wertes

// complex data-types
const classicalObject = {
  name: "Dömser",
  lastName: "Hautau",
  age: 34,
  isCool: true,
}; // object

const someList = [1, 2, 3, 4, "string drin", true, { name: "Dominik" }]; // array -> Liste

console.log("Beschriftung: ", typeof headline);

// extra cool knowledge: BigInt + Symbols

///// ------------------

const oneTimeFee = 2.5;
const al = 2;
const bbu = 3;
const monthlyFee = "15";

const sumForFirstMonth = al + bbu + oneTimeFee + monthlyFee;

console.log(sumForFirstMonth);
console.log(typeof sumForFirstMonth);

const firstName = "Dömser";
const lastName = "Hautau";
const greeting = "Hallo " + firstName + " " + lastName;

console.log("Begrüßung", greeting);

// false niemand
// 2.515 3
// 17.5 4
// NaN
// Einfach Error

const x = 2;
const y = 3;

const sumOfXAndY = x + y;
const productOfXAndY = x * y;
const quotientOfXAndY = x / y;

const remainder = 16 % 2;
console.log(remainder);

let balance = 200;

balance++;
balance++;
balance++;

console.log(balance);
