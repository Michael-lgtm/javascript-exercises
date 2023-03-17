const palindromes = function (str) {
    let arrOne = []
    let validatingStr = ""
    let arrTwo = []
    let secondStr = ""
    for (let i = 0; i < str.length; i++) {
        arrOne.push(str[i]);
    }
    for (let i = 0; i < arrOne.length; i++) {
        if (arrOne[i].match(/[a-z]/i)) {
            validatingStr += arrOne[i]
        }
    }
    validatingStr = validatingStr.toLowerCase()
    for (let i = 0; i < validatingStr.length; i++) {
        arrTwo.push(validatingStr[i]) 
    }
    arrTwo.reverse()
    for (let i = 0; i < arrTwo.length; i++) {
        secondStr += arrTwo[i]
    }
    if (validatingStr === secondStr) {
        return true
    } else {
        return false
    }
};
// Do not edit below this line
module.exports = palindromes;
