const { insertSort } = require('../../src/sort/insertSort');

test('should sort [3,2,1] to [1,2,3]', function () {

    const result = insertSort([3,2,1]);

    expect(result.join(',')).toBe('1,2,3');

})