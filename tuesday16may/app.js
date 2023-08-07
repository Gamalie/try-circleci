

function reverseNum(a){
    neg = a<0
    num = Math.abs(a).toString().split('').reverse().join('')
    const newNum = +(num)
    return neg ? -newNum :newNum 
} 
console.log(reverseNum(-200))



module.exports = {reverseNum}

