
function capitalizer(a){
    let newString = ''
    let sentenceSplit = a.trim().split(' ')
    for(let word of sentenceSplit){
        let wordSplit= word.split('')
        
       wordSplit[0]=wordSplit[0].toUpperCase()

        newString+=wordSplit.join('')+' '
       
    }
    return newString.trim()
}

module.exports = {capitalizer}