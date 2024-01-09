import { productsExceptSelf } from "./index.mjs";

describe('productsExceptSelf function', function () {
    
    it('finds products with no zeroes', function () {
        expect(productsExceptSelf([1, 2, 3])).toEqual([6, 3, 2]);
    });

    it('finds products with one zero', function () {
        expect(productsExceptSelf([1, 2, 3])).toEqual([6, 3, 2]);
    });

    it('finds products with two zeroes', function () {
        expect(productsExceptSelf([1, 2, 3])).toEqual([6, 3, 2]);
    });

    it('returns empty array, given empty array', function () {
        expect(productsExceptSelf([1, 2, 3])).toEqual([6, 3, 2]);
    });

    it('returns empty array, given a single item', function () {
        expect(productsExceptSelf([5])).toEqual([]);
    });

});