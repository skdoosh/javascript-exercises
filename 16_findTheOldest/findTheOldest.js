const findTheOldest = function(array) {
    return array.reduce((acc, curr)=>{
        if(acc === ({})) return curr;
        let ad = acc.yearOfDeath || new Date().getFullYear();
        let cd = curr.yearOfDeath || new Date().getFullYear();

        if ((ad-acc.yearOfBirth)>(cd-curr.yearOfBirth)){
            return acc;
        }else return curr;
    },{})
};

// Do not edit below this line
module.exports = findTheOldest;
