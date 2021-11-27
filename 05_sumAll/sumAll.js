const sumAll = function(start, end) {

    // Total begins at 0.
    let total = 0;

    // Check to make sure both numbers are positive integers.
    if (start > 0 && end > 0) {
        // Set conditions for if the start number is less than the end number.
        if (start < end) {
            // Begin with the starting number and increase by one until the end number is reached or exceeded.
            for (let i = start; i <= end; i += 1) {
                // Add the start number to the running total.
                total += i;
            }
            // When all numbers between the start number and the end number have been added, return the total sum.
            return total;
        // Set conditions for if the start number is greater than the end number.
        } else if (start > end) {
            // Begin with the starting number and decrement by one until the end number is reached or exceeded.
            for (let i = start; i >= end; i -= 1) {
                // Add the start number to the running total.
                total += i;
            }
            // When all numbers between the start number and the end number have been added, return the total sum.
            return total;
        }
    // Send an error message is either number is negative. 
    } else {
        return "ERROR"
    }
    

};

// Do not edit below this line
module.exports = sumAll;
