const {reverseNum} = require('./app')

describe('description', ()=>{
    test('should return a number', ()=>{
        expect(typeof reverseNum(10)).toBe('number')
    }),
    test('should reverse a number', ()=>{
        expect(reverseNum(10)).toEqual(1)
    })
    test('should return -34 given -43', ()=>{
        expect(reverseNum(-43)).toEqual(-34)
    })

})