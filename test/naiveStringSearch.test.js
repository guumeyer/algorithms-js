const { naiveSearchString } = require('../src/naiveSearchString');

test('should found 2 occurence of lon into lonborlon', function() {
    const result = naiveSearchString('lonborlon', 'lon');

    expect(result).toBe(2);
});

test('should not found of abc into abdacf', function() {
    const result = naiveSearchString('abdacf', 'abc');

    expect(result).toBe(0);
});