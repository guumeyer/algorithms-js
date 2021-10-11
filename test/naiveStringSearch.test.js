const { naiveSearchString } = require('../src/naiveSearchString');

test('should find 2 occurence of lon into lonborlon', function() {
    const result = naiveSearchString('lonborlon', 'lon');

    expect(result).toBe(2);
});