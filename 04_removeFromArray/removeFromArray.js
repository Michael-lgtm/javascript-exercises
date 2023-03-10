const removeFromArray = function(input, itemQuery) {
    let arr = input;
    let item = "";
    const count = 50;
    if (itemQuery.length > 50 ) {
        console.log("LIMIT IS 50 CHARACTERS!")
    } else {
        for ( i = 0; i<count ; i++ ) {
            if (arr[i] === itemQuery) {
                item = arr[i]
                arr.splice(arr[i] -1, 1)
                item = arr;
                break;
            } else if (arr[i] != itemQuery && arr[i] == arr[-1]) {
                item = "CAN NOT FIND ITEM!"
                break;
            }
            else {
                console.log("searching")
                continue;
            }
        }
    }
    return item
};
removeFromArray([1, 2, 3, 4], 2)
// Do not edit below this line
module.exports = removeFromArray;
