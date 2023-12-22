import { addTwoNumbers } from './index.mjs';

describe('addTwoNumbers function', function () {

    it('correctly adds two positive numbers', function () {
        expect(addTwoNumbers(5, 3)).toEqual(8);
    });

    it('correctly adds two negative numbers', function () {
        expect(addTwoNumbers(-5, -3)).toEqual(-8);
    });

    it('correctly adds a positive and a negative number', function () {
        expect(addTwoNumbers(-5, 3)).toEqual(-2);
    });

    it('correctly adds zero', function () {
        expect(addTwoNumbers(0, 5)).toEqual(5);
    });

});