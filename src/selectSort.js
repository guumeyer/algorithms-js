
// time: O(n^2); space: O(n);
// make less swap than bublesort algorithm
function selectSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIdx] > array[j]) {
                minIdx = j;
            }
        }
        if (minIdx == i) continue;
        swap(minIdx, i, array); 
    }

    return array;
}

function swap(i, j, array) {
    [array[j], array[i]] = [array[i], array[j]];
}

module.exports = {
    selectSort
}