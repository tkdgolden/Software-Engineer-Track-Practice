def find_two_numbers(nums, target):
    """ returns an array containing the indices of the two numbers in the given array that add up to the target """

    indices = []

    for each in nums:
        if each < target:
            remainder = (target - each)
            if remainder in nums:
                indices.append(nums.index(remainder))
                indices.append(nums.index(each))
        nums.remove(each)

    return indices