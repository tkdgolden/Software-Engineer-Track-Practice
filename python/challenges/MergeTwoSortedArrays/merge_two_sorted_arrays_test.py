import pytest
from merge_two_sorted_arrays import merge_two_sorted_arrays


def test_merges_typical_arrays():
    assert merge_two_sorted_arrays([1, 3, 6], [2, 4, 5]) == [1, 2, 3, 4, 5, 6]

def test_includes_duplicates():
    assert merge_two_sorted_arrays([1, 2, 3], [1, 2, 3]) == [1, 1, 2, 2, 3, 3]

def test_returns_array_when_one_array_empty():
    assert merge_two_sorted_arrays([1, 2, 3], []) == [1, 2, 3]

def test_returns_array_when_inputs_different_lengths():
    assert merge_two_sorted_arrays([1, 5], [2, 3, 4, 5, 6, 9, 12, 14]) == [1, 2, 3, 4, 5, 5, 6, 9, 12, 14]

def test_returns_empty_array_when_both_inputs_empty():
    assert merge_two_sorted_arrays([], []) == []

def test_throws_error_for_only_one_input():
    with pytest.raises(TypeError):
        merge_two_sorted_arrays([1, 3, 4])