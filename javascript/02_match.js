const input = "eu só queria Evitar A Fadiga";
const regex = /\b([A-Z])\w*\b/g;
const found = input.match(regex);

console.log(found);
// ['Evitar', 'A', 'Fadiga']

const inputWithoutFlag = "eu só queria Evitar A Fadiga";
const regexWithoutFlag = /\b([A-Z])\w*\b/;
const foundWithoutFlag = inputWithoutFlag.match(regexWithoutFlag);

console.log(foundWithoutFlag);
// ['Evitar', 'E']
// index: 13,
// input: 'eu só queria Evitar A Fadiga',
// groups: undefined
