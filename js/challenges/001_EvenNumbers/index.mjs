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