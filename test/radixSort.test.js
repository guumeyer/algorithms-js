const { getDigit, getNumberOfDigets } = require('../src/radixSort');


test('should get 1st number of 12345 and return 5', function () {
    const result  = getDigit(12345, 0); 

    expect(result).toBe(5);
})

test('should get 1st number from negative -12345 and return 5', function () {
    const result  = getDigit(-12345, 0); 

    expect(result).toBe(5);
})

test('should return number 4 digets from number 1235 ', function() {
    const result = getNumberOfDigets(1235);

    expect(result).toBe(4);
})

test('should return number 3 digets from negative number 123 ', function() {
    const result = getNumberOfDigets(-123);

    expect(result).toBe(3);
})