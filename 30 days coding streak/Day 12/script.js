const digit    = n => [...`${n}`].map(i => parseInt(i));

const digitize = n => [...`${n}`].map(i => parseInt(i));
console.log(digitize(123));
console.log(digitize(1230));
console.log(digit(123));
console.log(digit(1230));