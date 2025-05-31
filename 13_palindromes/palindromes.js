const palindromes = function (str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g,"") === str.toLowerCase().replace(/[^a-z0-9]/g,"").split('').reverse().join('');
};
let str = 'r3ace3car';
console.log(str.toLowerCase().replace(/[^a-z0-9]/g,""));
console.log(str.toLowerCase().replace(/[^a-z]/g,"").split('').reverse().join(''))
// palindromes('ZZZZ car, a man, a maracaz.');
// Do not edit below this line
module.exports = palindromes;
