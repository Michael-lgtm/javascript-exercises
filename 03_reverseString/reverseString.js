const reverseString = function(text) {
    let str = text;
    let newStr = "";
    let arr = [];
    for ( let i = 0; i < str.length;i++) {
        arr.push(str[i])
    }
    console.log(arr.length)
    arr.reverse()
    for (let i = 0; i < arr.length; i++) {
        newStr += arr[i]
    }
    return newStr;
};
reverseString('hello there')
// Do not edit below this line
module.exports = reverseString;
