const { getDigit, digitCouts, mostDigits, radixSort } = require('../../src/sort/radixSort');


test('should get 1st number of 12345 and return 5', function () {
    const result  = getDigit(12345, 0); 

    expect(result).toBe(5);
});

test('should get 1st number from negative -12345 and return 5', function () {
    const result  = getDigit(-12345, 0); 

    expect(result).toBe(5);
});

test('should count number 4 digets from number 1235 ', function() {
    const result = digitCouts(1235);

    expect(result).toBe(4);
});

test('should count 3 digets from negative number 123 ', function() {
    const result = digitCouts(-123);

    expect(result).toBe(3);
});

test('should count 1 digets from negative number 1 ', function() {
    const result = digitCouts(0);

    expect(result).toBe(1);
});

test('should return the larggest digets from [12, 123, 1234] that is 4', function() {
    const result = mostDigits([12, 123, 1234]);

    expect(result).toBe(4);
});

test('Should sort [10, 24, 76, 73, 72, 1, 9] to [1,9,10,24,72,73,76]', function() {
    const result = radixSort([10, 24, 76, 73, 72, 1, 9]);
    expect(result).toEqual([1,9,10,24,72,73,76]);
});