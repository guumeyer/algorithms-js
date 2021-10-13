// time: avg O(n log n), worst: O(n^2)
// space: O(1), but the call stack will be O(log n) because of the recursion
function quickSort(array) {
    _quickSort(array, 0, (array.length - 1));

    return array;
}

function _quickSort(array, startIdx, endIdx) {
    if (startIdx >= endIdx) return;

    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;

    while(rightIdx >= leftIdx) {
        if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
            swap(leftIdx, rightIdx, array);
        }

        if (array[leftIdx] <= array[pivotIdx]) leftIdx ++;
        if (array[rightIdx] >= array[pivotIdx]) rightIdx --;
    }

    swap(pivotIdx, rightIdx, array);

    _quickSort(array, (rightIdx + 1), endIdx);
    _quickSort(array, startIdx, (rightIdx - 1));
}

function swap(i, j, array) {
    [array[j], array[i]] = [array[i], array[j]];
}

module.exports = {
    quickSort
}