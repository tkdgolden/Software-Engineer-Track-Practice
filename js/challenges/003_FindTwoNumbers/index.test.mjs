import { findTwoNumbers } from './index.mjs';

describe('findTwoNumbers at beginning', function () {
    it('test', function () {
        expect([[0, 1], [1, 0]]).toContain(findTwoNumbers([2, 7, 11, 15], 9));
    });
});

describe('findTwoNumbers at end', function () {
    it('test', function () {
        expect([[4, 3], [3, 4]]).toContain(findTwoNumbers([2, 3, 14, 9, 1], 10));
    });
});

describe('findTwoNumbers not adjacent', function () {
    it('test', function () {
        expect([[3, 6], [6, 3]]).toContain(findTwoNumbers([1, 2, 3, 4, 10, 11, 15, 12], 19));
    });
});

describe('findTwoNumbers only two numbers', function () {
    it('test', function () {
        expect([[0, 1], [1, 0]]).toContain(findTwoNumbers([1, 2], 3));
    });
});

describe('findTwoNumbers with zero', function () {
    it('test', function () {
        expect([[0, 3], [3, 0]]).toContain(findTwoNumbers([1, 2, 3, 0], 1));
    });
});

describe('findTwoNumbers with negative', function () {
    it('test', function () {
        expect([[2, 3], [3, 2]]).toContain(findTwoNumbers([2, 4, 6, -1], 5));
    });
});