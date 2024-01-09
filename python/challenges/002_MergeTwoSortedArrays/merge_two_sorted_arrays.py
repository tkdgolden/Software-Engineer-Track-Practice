def merge_two_sorted_arrays(arr1, arr2):
    """ returns a sorted array that contains everything from each of the two input sorted arrays """

    new_array = []

    index1 = 0
    index2 = 0
    while(index1 < len(arr1) and index2 < len(arr2)):
        if arr1[index1] < arr2[index2]:
            new_array.append(arr1[index1])
            index1 += 1
        else:
            new_array.append(arr2[index2])
            index2 += 1
    while index1 < len(arr1):
        new_array.append(arr1[index1])
        index1 += 1
    while index2 < len(arr2):
        new_array.append(arr2[index2])
        index2 += 1

    return new_array
