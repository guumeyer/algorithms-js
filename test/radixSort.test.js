const { getDigit } = require('../src/radixSort');


test('should get 1st number of 12345 and return 5', function () {
    const result  = getDigit(12345, 0); 

    expect(result).toBe(5);
})

test('should get 1st number from negative -12345 and return 5', function () {
    const result  = getDigit(-12345, 0); 

    expect(result).toBe(5);
})