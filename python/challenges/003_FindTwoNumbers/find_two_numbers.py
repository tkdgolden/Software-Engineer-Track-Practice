def find_two_numbers(nums, target):
    """ returns an array containing the indices of the two 
    numbers in the given array that add up to the target """

    items = {}
    counter = 0
    for each in nums:
        remainder = target - each
        if remainder in items:
            return [items[remainder], counter]
        else:
            items[each] = counter
        counter += 1
            