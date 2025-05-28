const removeFromArray = function(array, ...values) {
    return array.filter(val=>(!values.includes(val)));
};
// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }

// Do not edit below this line
module.exports = removeFromArray;
