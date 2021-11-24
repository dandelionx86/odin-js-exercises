// this function takes a string and reverses its order
const reverseString = function(str) {
    // take a string that includes multiple words and grammar
    // reverse the order of the string

    // the split method separates each character into it's own object 
    // the reverse method reverses the oder of the objects (characters) in the array
    // the join method joins the objects (charactes) together in the reverse order
    return str.split("").reverse("").join("");

};

// Do not edit below this line
module.exports = reverseString;
