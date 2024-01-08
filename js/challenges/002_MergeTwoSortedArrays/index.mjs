/* 
 * Returns a new sorted array with every item from each of two input sorted arrays.
 * @param {array} arr1 Input sorted array
 * @param {array} arr2 Input sorted array
 * @returns {array} New combined sorted array
 */
export function mergeTwoSortedArrays(arr1, arr2) {
    let newArray = [];

    let index1 = 0;
    let index2 = 0;
    while((index1 < arr1.length) && (index2 < arr2.length)) {
        if (arr1[index1] < arr2[index2]) {
            newArray.push(arr1[index1]);
            index1++;
        }
        else {
            newArray.push(arr2[index2]);
            index2++;
        }
    }
    while(index1 < arr1.length) {
        newArray.push(arr1[index1]);
        index1++;
    }
    while(index2 < arr2.length) {
        newArray.push(arr2[index2]);
        index2++;
    }

    return newArray;
}