
// function fizzBuzz(){
// for (let i = 0; i <= 30;i++) {
// console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)}}


function fizzBuzz() {
    for (let i = 0; i < 30; i++) {

        if (i % 3 && i % 5 == 0) {
            console.log('fizzbuzz'
            )
        }
        else if (i % 3 == 0) {
            console.log('fizz')
        }
        else if (i % 5 == 0) {
            console.log('buzz')
        }
        else {
            console.log(i)
        }
    }
}

module.exports = {fizzBuzz}
