def merge_two_sorted_arrays(arr1, arr2):
    """ returns a sorted array that contains everything from each of the two input sorted arrays """

    new_array = []

    while((len(arr1) > 0) and (len(arr2) > 0)):
        if (arr1[0] < arr2[0]):
            new_array.append(arr1.pop(0))
        else:
            new_array.append(arr2.pop(0))

    for each in arr1:
        new_array.append(each)
    for each in arr2:
        new_array.append(each)

    return new_array