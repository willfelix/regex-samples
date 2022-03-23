var regex = /#([a-f0-9]{3}){1,2}/i;

console.log(regex.test("#12")); // false
console.log(regex.test("#ec0")); // true
console.log(regex.test("#1243")); // false
console.log(regex.test("#ec0ec0")); // true
