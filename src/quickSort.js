// time: avg: O(n log n), worst: O(n^2) - on picking smallest element as pivot will require O(n) decompositions x O(n) comparasions per decomposion
// space: O(log n) due the recursion into call stack 
function quickSort(array) {
    return _quickSort(array, 0, (array.length - 1));;
}

function _quickSort(array, startIdx, endIdx) {
    if (startIdx >= endIdx) return array;

    const partitionIdx = partition(array, startIdx, endIdx);

    _quickSort(array, (partitionIdx + 1), endIdx);
    _quickSort(array, startIdx, (partitionIdx - 1));

    return array;
}

function partition(array, startIdx, endIdx) {
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

    return rightIdx;
}

function swap(i, j, array) {
    [array[j], array[i]] = [array[i], array[j]];
}

module.exports = {
    quickSort
}