const { quickSort } = require('../src/quickSort');

test("Should sort ['b','c','a','d'] to abcd", function() {
    const result = quickSort(['b','c','a','d']).join('');
    expect(result).toBe('abcd');
});

test("Should sort [10,-2,4,-23] to [-23,-2,4,10]", function() {
    const result = quickSort([10,-2,4,-23]).join('');
    expect(result).toBe('-23-2410');
});