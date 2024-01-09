import { mergeTwoSortedArrays } from './index.mjs';

describe('mergeTwoSortedArrays function', function () {

    it('merges two typical arrays', function () {
        expect(mergeTwoSortedArrays([1, 3, 6], [2, 4, 5])).toEqual([1, 2,3, 4, 5, 6]);
    });

    it('merge includes duplicates', function () {
        expect(mergeTwoSortedArrays([1, 2, 3], [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
    });

    it('returns array when one array is empty', function () {
        expect(mergeTwoSortedArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
    });

    it('returns array when inputs are different lengths', function () {
        expect(mergeTwoSortedArrays([1, 5], [2, 3, 4, 5, 6, 9, 12, 14])).toEqual([1, 2, 3, 4, 5, 5, 6, 9, 12, 14]);
    });

    it('returns empty array when both inputs are empty', function () {
        expect(mergeTwoSortedArrays([], [])).toEqual([]);
    });

    it('throws an error for missing input', function() {
        expect(function () {
            mergeTwoSortedArrays([1, 3, 4]);
        }).toThrowError();
    });

});