def remove_even_numbers(lst):
    new = []
    for each in lst:
        if each % 2 != 0:
            new.append(each)
    return new