const fibonacci = function(num) {
    if (num < 0) {
        return 'OOPS'
    } else {
        let fibSeq = [0, 1]
        let newNum = 0
        for (let i = 0; i < num; i++) {
            newNum = fibSeq[i] + fibSeq[i+1]
            fibSeq.push(newNum)
        }
        let length = fibSeq.length
        return fibSeq[length - 2]
    }
};
console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
