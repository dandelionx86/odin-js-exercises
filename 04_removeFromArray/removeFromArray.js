// This function removes values from an array based on whether they are equal to the values
// in another array.

// myArray is the array that is changed.
// toRemove is the array that contains the values that will be removed from my Array.
const removeFromArray = function(myArray, ...toRemove) {

    // This section loops through the length of an array to determine if any of the
    // values it contains are equal to any values in another array. 
    for (i = 0; i < toRemove.length; i++) {
        if (myArray.includes(toRemove[i])) {
            // This section removes the values that are equal to each other from the
            // array.
            myArray.splice(myArray.indexOf(toRemove[i]), 1);
        }
    }

    // The array is returned after all of the determined values are removed.
    return myArray;


};

// Do not edit below this line
module.exports = removeFromArray;
