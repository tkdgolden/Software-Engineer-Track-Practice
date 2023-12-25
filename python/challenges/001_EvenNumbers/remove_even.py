def remove_even_numbers(lst):
    """ Returns a new list containing only the odd numbers from the original list, if any. """

    return list(filter(lambda x: x % 2 != 0, lst))