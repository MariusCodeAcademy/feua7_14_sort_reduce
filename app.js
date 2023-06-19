'use strict';
console.log('App.js');

const colors = ['red', 'green', 'blue', 'apple'];

console.log('colors ===', colors);

// paprastas isrikiavimas
colors.sort();

console.log('colors after sort ===', colors);

colors.reverse();

console.log('colors after reverse ===', colors);

// skaitinis rikiavimas

const nums = [7, 1, 0, -10, 50, -5];

console.log('nums', nums);

nums.sort();

console.log('nums.sort()', nums);

// sorting nums with function
//sort
nums.sort((a, b) => a - b);

console.log('nums.sort((a, b) => a - b);', nums);

// reverse
nums.sort((a, b) => b - a);

console.log('nums.sort((a, b) => b - a);', nums);

//

nums.sort((num1, num2) => {
  // turi grazinti neigiama, teigiama arba 0
  if (num1 > num2) return -1;

  if (num1 < num2) return 1;

  return 0;
});
console.log('nums.sort(expanded)', nums);
