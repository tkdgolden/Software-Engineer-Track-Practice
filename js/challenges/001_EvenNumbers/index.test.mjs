// import { default as removeEvenNumbers } from './index.mjs';

// describe('removeEvenNumbers function', function () {

//     it('removes even numbers from a typical list', function () {
//         expect(removeEvenNumbers([1, 2, 4, 5, 10, 6, 3])).toEqual([1, 5, 3]);
//     });

//     it('returns an empty list when input is empty', function () {
//         expect(removeEvenNumbers([])).toEqual([]);
//     });

//     it('returns an empty list when all numbers are even', function () {
//         expect(removeEvenNumbers([2, 4, 6, 8, 10])).toEqual([]);
//     });

//     it('returns the same list when all numbers are odd', function () {
//         expect(removeEvenNumbers([1, 3, 5, 7, 9])).toEqual([1, 3, 5, 7, 9]);
//     });

//     it('handles a single element list that is odd', function () {
//         expect(removeEvenNumbers([7])).toEqual([7]);
//     });

//     it('returns an empty list for a single element list that is even', function () {
//         expect(removeEvenNumbers([4])).toEqual([]);
//     });

//     it('correctly removes even numbers from a list with negative integers', function () {
//         expect(removeEvenNumbers([-1, -2, -3, -4, -5])).toEqual([-1, -3, -5]);
//     });

//     it('handles mixed positive and negative integers', function () {
//         expect(removeEvenNumbers([-1, 2, -3, 4, 5])).toEqual([-1, -3, 5]);
//     });

//     it('works correctly with large numbers', function () {
//         expect(removeEvenNumbers([1001, 2002, 3003, 4004, 5005])).toEqual([1001, 3003, 5005]);
//     });

//     // Assuming the function should throw an error for non-integer inputs
//     it('throws an error for non-integer inputs', function () {
//         expect(function () {
//             removeEvenNumbers([1, 2, 'three', 4, 5]);
//         }).toThrowError();
//     });

// });