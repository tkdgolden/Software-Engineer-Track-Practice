def products_except_self(nums):
    """ returns an array containing the products of all numbers in the array except the number at the current index """

    all_products = 0
    new_array = []

    if nums.count(0) == 0:
        all_products = 1
        for num in nums:
            all_products *= num
        for num in nums:
            new_array.append(all_products / num)
    elif nums.count(0) == 1:
        all_products = 1
        for num in nums:
            if num != 0:
                all_products *= num
        for num in nums:
            if num != 0:
                new_array.append(0)
            else:
                new_array.append(all_products)
    else:
        for num in nums:
            new_array.append(0)

    return new_array