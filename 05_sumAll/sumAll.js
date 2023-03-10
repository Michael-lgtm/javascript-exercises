const sumAll = function(start, end) {
    let sum = 0;
    if (typeof start != "number" || typeof end != "number") {
        return 'ERROR'
    } else if (start<0 || end<0) {
        return 'ERROR'
    } else if (end > start) {
        for (let i = 0; i<end-(start - 1); i++) {
            sum += start + i;
        }
        return sum
    } else if (start > end) {
        for (let i = 0; i<start-(end - 1); i++) {
            sum += end + i;
        }
        return sum
    }
};
sumAll(1, "2")
// Do not edit below this line
module.exports = sumAll;
``