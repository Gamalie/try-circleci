// Import the function to be tested
// import { capitalizer } from './capitalizeWord.js';
const {capitalizer} = require('./capitalizeWord.js')
// import {describe,expect,it} from 'vitest'

// Test case
describe('#capitalizer', () => {
  it('should return the a string whose first letter in every word is in uppercase',()=> {
    expect(capitalizer('i am a girl')).toBe('I Am A Girl')})
  it('should return the a string whose first letter in every word is in uppercase even with spaces before and after',()=> {
        expect(capitalizer(' requirements ')).toBe('Requirements')});
});