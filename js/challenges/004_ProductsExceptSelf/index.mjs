/* 
 * Returns a new array with the products of all the numbers in the array except the number at the current index
 * @param {array} arr Original array
 * @returns {array} New Array of products
 */
export function productsExceptSelf(arr) {
    var all_products;
    var new_array;
    var positive_arr = arr.filter(x => x !== 0);
    var num_zeroes = (arr.length - positive_arr.length);

    if (num_zeroes === 0) {
        all_products = arr.reduce(products, 1);
        new_array = arr.map((x) => (all_products / x));
    }
    else if (num_zeroes === 1) {
        all_products = positive_arr.reduce(products, 1);
        new_array = arr.map(safe_divide);
    }
    else {
        new_array = arr.map(x => 0);
    }

    function products(accumulator, currentValue) {
        return accumulator * currentValue;
    };

    function safe_divide(num) {
        if (num !== 0) {
            return 0;
        }
        else {
            return all_products;
        };
    };

    if (arr.length === 1) {
        new_array = [];
    }

    return new_array;
};