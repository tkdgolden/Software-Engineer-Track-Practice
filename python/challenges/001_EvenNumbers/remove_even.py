def remove_even_numbers(lst):
    """ Returns a new array containing only the odd numbers from the original array, if any. """
    
    new_array = []
    for each in lst:
        if each % 2 != 0:
            new_array.append(each)
    return new_array