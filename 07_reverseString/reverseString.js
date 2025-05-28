const reverseString = function(str) {
    let arr = str.split('');
    let b = arr.reverse();
    let reversed = b.join('');
    return reversed;

};
console.log(reverseString('hello'))
// Do not edit below this line
module.exports = reverseString;
