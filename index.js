console.log("Hello Node");

var slugify = require('slugify');

const title = slugify('some string');

console.log(title);

const title2 = slugify('some string lorem ipsum','*');

console.log(title2);


const title3 = slugify('some string lorem ipsum','+');

console.log(title3);