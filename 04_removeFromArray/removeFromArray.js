const removeFromArray = function(input, ...args) {
    let userArr = input;
    let newArr = [];
    for (d = 0;d<args.length;d++) {
        for (i = 0;i<userArr.length;i++) {
            if (userArr[i] === args[d]) {
                userArr.splice(i, 1)
                newArr = userArr
            } else if (userArr[i] != args[d]) {
                newArr = userArr
            }
        }
    }
    return newArr;
}
    
removeFromArray([1, 2, 3, 4], 3, "tesy")
// Do not edit below this line
module.exports = removeFromArray;