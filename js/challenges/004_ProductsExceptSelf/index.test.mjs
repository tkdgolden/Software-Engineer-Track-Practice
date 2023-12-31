import { productsExceptSelf } from "./index.mjs";

describe('productsExceptSelf function', function () {
    
    it('finds products with no zeroes', function () {
        expect(productsExceptSelf([1, 2, 3])).toEqual([6, 3, 2]);
    });

});