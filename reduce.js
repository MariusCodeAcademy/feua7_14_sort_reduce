'use strict';
console.log('reduce.js file was loaded');

const ages = [1, 2, 3, 4, 5];

// psiaudo kodas suskaiciuoti suma

// sukam cikla
// kiekviena reiksme sudedam (dedam prie total kuris pradzioje yra 0)
// gale po ciklu atspausdinam kiek gavosi

let total = 0;
// ciklas
ages.map((sk, idx) => {
  total = total + sk;
  console.log(idx, 'total ===', total);
});
console.log('total ===', total);
// gauti vidurki, total / kiek elementu

const avg = total / ages.length;

console.log('avg ===', avg.toFixed(2));

// reduce

// array.reduce((total, currentValue, currentIndex, arr) => {}, initialValue)
const ages1 = [1, 2, 3];
//          1/3 + 2/3 + 3/3
const agesTotal = ages.reduce((total, sk, idx) => {
  console.log(`ciklas: ${idx}, sk: ${sk}, total: ${total}`);
  // ka grazins sita funkcija tas gryz i kito ciklo total
  const miniSuma = total + sk;
  return miniSuma;
}, 0);

const agesTotalShorter = ages.reduce((total, sk, idx) => total + sk, 0);

console.log('agesTotal ===', agesTotal);
console.log('agesTotalShorter ===', agesTotalShorter);

const agesAvgShorter = ages.reduce(
  (total, sk, idx, arr) => total + sk / arr.length,
  0
);
console.log('agesAvgShorter ===', agesAvgShorter);
