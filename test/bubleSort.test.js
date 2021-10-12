const { bubbleSort } = require('../src/bubleSort');


test('should sort [3,2,1] to [1,2,3]', function () {

    const result = bubbleSort([3,2,1]);

    expect(result.join(',')).toBe('1,2,3');

})