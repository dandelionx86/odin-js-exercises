const leapYears = function(year) {
    // if year is divisible by four and 400 but not 100 it is a leap year

    // First check if the year is divisible by 4 or 400.
    if (year % 4 === 0 | year % 400 === 0) {
        // Then, check if the year is also divisible by 100. If it is, then it is not
        // a leap year.
        if (year % 100 == 0) {
            return false;
        // If it is not divisible by 100, then it is a leap year.
        } else {
            return true;
        }
    // If the year is not divisible by 4 nor 400 then it is not a leap year.
    } else {
        return false;
    }
}
    
  
    
// Do not edit below this line
module.exports = leapYears;
