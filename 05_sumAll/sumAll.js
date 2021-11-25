const sumAll = function(minNum, maxNum) {

    let total = 0

    if (minNum >= 0 && maxNum >= 0) {
         let total = sumAll(minNum, maxNum)
         return total;

    } else {
        return "ERROR"
    }

    // takes two numbers as a range
    // returns an error if a number is negative
    // adds all of the numbers between and incliding the two numbers given


};

// Do not edit below this line
module.exports = sumAll;
