const users = [
  {
    name: 'Mickey Mouse',
    age: 92,
    gender: 'Male',
    town: 'Disneyville',
  },
  {
    name: 'SpongeBob SquarePants',
    age: 33,
    gender: 'Male',
    town: 'Bikini Bottom',
  },
  {
    name: 'Dora the Explorer',
    age: 14,
    gender: 'Female',
    town: 'Playa Verde',
  },
  {
    name: 'Bugs Bunny',
    age: 83,
    gender: 'Male',
    town: 'Looneyville',
  },
  {
    name: 'Lisa Simpson',
    age: 9,
    gender: 'Female',
    town: 'Springfield',
  },
];
console.table(users);
// isrikiuoti pagal amziu

users.sort((a, b) => a.age - b.age);

console.table(users);
