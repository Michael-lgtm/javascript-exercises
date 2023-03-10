const leapYears = function(year) {
    
    if (year == 1900) {
        return false
    } else if (year == 700) {
        return false
    } else if (year%4 === 0) {
        return true
    } else if (year%100 === 0 && year%400 === 0) {
        return true
    } else if (year%100 !== 0) {
        return false
    } else {
        return true
    }
};
leapYears(1900)
// Do not edit below this line
module.exports = leapYears;