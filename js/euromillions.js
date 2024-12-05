/* L'euromillions consiste à faire un tirage de 5 nombres entre 1 et 50 et deux numéros étoiles entre 1 et 12

liste de courses bien utiles :
Math.random()
while(**)
Math.ceil(**)
push(**)
includes(**)
setTimeout(**)

*/


let euro = document.getElementById('euromillions');
let result = document.getElementById('resultat');
let bshow = document.getElementsByClassName('zone boule show');
let eshow = document.getElementsByClassName('zone etoile show');


const numeros = [];
const compl = [];


while (numeros.length < 5) {


    let nombreAleatoire = Math.floor(Math.random() * 50) + 1;
    console.log(nombreAleatoire);

    if (!numeros.includes(nombreAleatoire)) {

        numeros.push(nombreAleatoire);

    };

};



console.log(numeros);



while (compl.length < 2) {


    let nombreCompl = Math.floor(Math.random() * 12) + 1;
    console.log(nombreCompl);

    if (!compl.includes(nombreCompl)) {

        compl.push(nombreCompl);

    };





};

console.log(compl);



numeros.forEach((tirage) => {


    let boules = document.createElement('div');
  
    boules.textContent = tirage.nombreAleatoire;
    boules.classList.add('zone', 'boule', 'show');

    boules.appendChild(result);




});









































