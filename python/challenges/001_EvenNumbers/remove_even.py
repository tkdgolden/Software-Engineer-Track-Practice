def remove_even_numbers(lst):
    new_array = []
    for each in lst:
        if each % 2 != 0:
            new_array.append(each)
    return new_array