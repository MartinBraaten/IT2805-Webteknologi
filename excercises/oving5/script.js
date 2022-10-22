/* Part 2 */
console.log("PART 2");

/* For-løkke fra 1 til og med 20. Printer ut i for hver gang, og legger til 1. */
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

/* Part 3 */
console.log("PART 3");

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

/* For-løkke fra indeks 0 til lengden på arrayet */
for (let i = 0; i < numbers.length; i++) {
  /* Om i er deleling på 3 og 5, print eplekake til console */
  if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
    console.log("eplekake");
  } else if (numbers[i] % 3 === 0) {
    /* om i er delelig på 3, print eple*/
    console.log("eple");
  } else if (numbers[i] % 5 === 0) {
    /* om i er delelig på 5, print kake */
    console.log("kake");
  } else {
    /* ellers, print i */
    console.log(numbers[i]);
  }
}

/* Part 4 */

/* Lager en variabel title, som er elementet title fra html-filen */
const title = document.getElementById("title");

/* Bruker funksjonen innertext til å lage tittel*/
title.innerText = "Hello, JavaScript";

/* Part 5 */

/* Definerer variablene buttons og box. Hentet fra html-filen, som har blitt endre tilsvarende for å få koden til å fungere. */

const buttons = document.getElementsByClassName("buttons");
const box = document.getElementById("magic");

function changeDisplay() {
  /* Funksjonen endrer display for box til none */
  box.style.display = "none";
}

function changeVisibility() {
  /* Endrer box visibility til hidden og display til block */
  box.style.visibility = "hidden";
  box.style.display = "block";
}

function reset() {
  /* Funksjonen gjør box style visibility til visible og display til block, som den startet med.   */
  box.style.visibility = "visible";
  box.style.display = "block";
}

/* Part 6 */
const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Python",
  "Java",
  "AJAX",
  "JSON",
  "React",
  "Angular",
  "Bootstrap",
  "Node.js",
];

/* For-løkken kjører gjennom arrayet technologies */
for (let i = 0; i < technologies.length; i++) {
  /* Lager en ordered list (<li> element) */
  const node = document.createElement("LI");
  /* Lager et tekstelement i listen technologies */
  const textnode = document.createTextNode(technologies[i]);
  /* Legger til textnoden i noden*/
  node.appendChild(textnode);
  /* Legger til node i den uordnete listen tech i html-filen */
  document.getElementById("tech").appendChild(node);
}
