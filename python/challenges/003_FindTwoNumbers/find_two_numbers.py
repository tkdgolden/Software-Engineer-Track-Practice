def find_two_numbers(nums, target):
    """ returns an array containing the indices of the two 
    numbers in the given array that add up to the target """

    indices = []
    items = {}
    counter = 0
    for each in nums:
        remainder = target - each
        if remainder in items:
            indices = [items[remainder], counter]
        else:
            items[each] = counter
        counter += 1

    return indices
            