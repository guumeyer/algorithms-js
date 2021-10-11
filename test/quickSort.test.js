const { quickSort } = require('../src/quickSort');

test("Should sort bcad to abcd", function() {
    const result = quickSort(['b','c','a','d']).join('');
    expect(result).toBe('abcd');
});