'use strict';
console.log('reduce.js file was loaded');

const ages = [1, 2, 3, 4, 5];

// psiaudo kodas suskaiciuoti suma

// sukam cikla
// kiekviena reiksme sudedam (dedam prie total kuris pradzioje yra 0)
// gale po ciklu atspausdinam kiek gavosi

let total = 0;
// ciklas
ages.map((sk) => {
  total = total + sk;
});
console.log('total ===', total);
// gauti vidurki, total / kiek elementu

const avg = total / ages.length;

console.log('avg ===', avg.toFixed(2));
