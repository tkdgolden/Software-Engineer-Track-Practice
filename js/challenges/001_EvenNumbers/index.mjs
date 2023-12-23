/* 
 * Returns a new array with only the odd numbers from the original, if any.
 * @param {array} arr Original Array
 * @returns {array} New odd-only array
 */
export default (arr) => {
    const newArray = [];
    arr.forEach(element => {
        if (isNaN(element)) {
            throw new TypeError('The array should contain only numbers.')
        };
        if (element % 2 !== 0) {
            newArray.push(element)
        };
    });
    return newArray;
};