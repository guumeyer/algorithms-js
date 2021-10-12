// time: best: O(n) avg: O(n^2); space: O(1);
// Good for sort on inserting element
function insertSort(array) {
    for (let i = 1; i < array.length; i ++) {
        const value = array[i];
        let j = i - 1;
        while ( j >= 0 && array[j] > value) {
            array[j+1] = array[j];
            j --;
        }
        
        array[j+1] = value;
    }

    return array;
}

module.exports = {
    insertSort
}