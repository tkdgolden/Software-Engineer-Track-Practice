/* 
 * Returns an array of the indices of the two numbers in the input array that add to the target
 * @param {array} arr Input array to search
 * @param {int} target Target integer to search
 * @returns {array} Two indices where numbers adding to target were found in given array
 */
export default (arr, target) => {
    var indices = [];

    arr.forEach(findSum)
    
    function findSum(item, index, array) {
        if (item < target) {
            remainder = (target - item);
            remainderIndex = array.findIndex(remainder);
            if (remainderIndex != -1) {
                indices.push(index);
                indices.push(remainderIndex);
            };
        };
    };

    return indices;
};