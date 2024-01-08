/* 
 * Returns a new sorted array with every item from each of two input sorted arrays.
 * @param {array} arr1 Input sorted array
 * @param {array} arr2 Input sorted array
 * @returns {array} New combined sorted array
 */
export function mergeTwoSortedArrays(arr1, arr2) {
    let newArray = [];

    while((arr1.length > 0) && (arr2.length > 0)) {
        if (arr1[0] < arr2[0]) {
            newArray.push(arr1.splice(0, 1)[0]);
        }
        else {
            newArray.push(arr2.splice(0, 1)[0]);
        }
    }

    newArray.push.apply(newArray, arr1);
    newArray.push.apply(newArray, arr2);

    return newArray;
}