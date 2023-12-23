/* 
 * Returns a new array with only the odd numbers from the original, if any.
 * @param {array} arr Original Array
 * @returns {array} New odd-only array
 */
export default (arr) => {
    return arr.filter((num) => {
        if (isNaN(num)) throw new TypeError('Original array must contain only numbers.');
        if (num % 2 !== 0) return true;
    });
};