from products_except_self import products_except_self

def test_products_without_zeroes():
    assert (products_except_self([1, 2, 3])) == [6, 3, 2]

def test_products_with_one_zero():
    assert (products_except_self([1, 2, 3, 0])) == [0, 0, 0, 6]

def test_products_with_two_zeroes():
    assert (products_except_self([0, 1, 2, 3, 0])) == [0, 0, 0, 0, 0]

def test_empty_array():
    assert (products_except_self([])) == []

def test_one_element_in_array():
    assert (products_except_self([5])) == [1]