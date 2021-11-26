const sumAll = function(start, end) {

    let total = 0;

    while (start >= 0 && end >= 0) {
        total += start;
        start += 1;
    }

    return total;

};

// Do not edit below this line
module.exports = sumAll;
