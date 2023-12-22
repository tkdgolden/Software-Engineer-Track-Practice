# import pytest

# from remove_even import remove_even_numbers


# def test_removes_even_numbers_from_typical_list():
#     assert remove_even_numbers([1, 2, 4, 5, 10, 6, 3]) == [1, 5, 3]

# def test_returns_empty_list_when_input_is_empty():
#     assert remove_even_numbers([]) == []

# def test_returns_empty_list_when_all_numbers_are_even():
#     assert remove_even_numbers([2, 4, 6, 8, 10]) == []

# def test_returns_same_list_when_all_numbers_are_odd():
#     assert remove_even_numbers([1, 3, 5, 7, 9]) == [1, 3, 5, 7, 9]

# def test_handles_single_element_list_that_is_odd():
#     assert remove_even_numbers([7]) == [7]

# def test_returns_empty_list_for_single_element_list_that_is_even():
#     assert remove_even_numbers([4]) == []

# def test_correctly_removes_even_numbers_from_list_with_negative_integers():
#     assert remove_even_numbers([-1, -2, -3, -4, -5]) == [-1, -3, -5]

# def test_handles_mixed_positive_and_negative_integers():
#     assert remove_even_numbers([-1, 2, -3, 4, 5]) == [-1, -3, 5]

# def test_works_correctly_with_large_numbers():
#     assert remove_even_numbers([1001, 2002, 3003, 4004, 5005]) == [1001, 3003, 5005]

# def test_throws_error_for_non_integer_inputs():
#     with pytest.raises(TypeError):
#         remove_even_numbers([1, 2, 'three', 4, 5])