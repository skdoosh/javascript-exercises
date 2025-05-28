const repeatString = function(foo, bar) {
    if(bar<0) return('ERROR');
    let result = '';
    for(let i = 0; i<bar; i++){
        result+=foo;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
