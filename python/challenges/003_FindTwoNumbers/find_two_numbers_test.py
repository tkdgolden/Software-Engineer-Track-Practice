from find_two_numbers import find_two_numbers

def test_find_target_at_beginning():
    assert (find_two_numbers([2, 7, 11, 15], 9) == [0, 1]) or (find_two_numbers([2, 7, 11, 15], 9) == [1, 0])

def test_find_target_at_end():
    assert (find_two_numbers([2, 3, 14, 9, 1], 10) == [3, 4]) or (find_two_numbers([2, 3, 14, 9, 1], 10) == [4, 3])

def test_find_target_not_adjacent():
    assert (find_two_numbers([1, 2, 3, 4, 10, 11, 15, 12], 19) == [3, 6]) or (find_two_numbers([1, 2, 3, 4, 10, 11, 15, 12], 19) == [6, 3])

def test_find_target_only():
    assert (find_two_numbers([1, 2], 3) == [0, 1]) or (find_two_numbers([1, 2], 3) == [1, 0])

def test_find_target_with_zero():
    assert (find_two_numbers([1, 2, 3, 0], 1) == [0, 3]) or (find_two_numbers([1, 2, 3, 0], 1) == [3, 0])

def test_find_target_with_negative():
    assert (find_two_numbers([2, 4, 6, -1], 5) == [3, 2]) or (find_two_numbers([2, 4, 6, -1], 5) == [2, 3])