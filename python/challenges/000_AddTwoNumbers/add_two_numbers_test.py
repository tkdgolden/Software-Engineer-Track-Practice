import pytest

from add_two_numbers import add_two_numbers

def test_adds_two_positive_numbers():
    assert add_two_numbers(5, 3) == 8

def test_adds_two_negative_numbers():
    assert add_two_numbers(-5, -3) == -8

def test_adds_positive_and_negative_number():
    assert add_two_numbers(-5, 3) == -2

def test_adds_zero():
    assert add_two_numbers(0, 5) == 5
