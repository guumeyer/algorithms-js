const { merge, mergeSort } = require('../../src/sort/mergeSort');

test('Should merge [3,6,9] and [1,2,7]', function() {
    const result = merge([3,6,9], [1,2,7]);
    expect(result).toEqual([1,2,3,6,7,9]);
});

test('Should merge [3,6,9,32] and [1,2,7]', function() {
    const result = merge([3,6,9,32], [1,2,7]);
    expect(result).toEqual([1,2,3,6,7,9,32]);
});

test('Should merge [] and [1,2,7]', function() {
    const result = merge([], [1,2,7]);
    expect(result).toEqual([1,2,7]);
});

test('Should merge [1,2,7] and [1,2,7]', function() {
    const result = merge([1,2,7], [1,2,7]);
    expect(result).toEqual([1,1,2,2,7,7]);
});

test('Should Sort [10, 24, 76, 73, 72, 1, 9] to [1,9,10,24,72,73,76]', function() {
    const result = mergeSort([10, 24, 76, 73, 72, 1, 9]);
    expect(result).toEqual([1,9,10,24,72,73,76]);
});