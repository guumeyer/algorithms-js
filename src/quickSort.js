
function _quickSourt(array, startIdx, endIdx) {
    if(startIdx >= endIdx) {
        return;
    }

    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;

    while(rightIdx >= leftIdx) {
        if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
            swap(leftIdx, rightIdx, array);
        }
        if (array[leftIdx] <= array[pivotIdx]) {
            leftIdx ++;
        }
        if (array[rightIdx] >= array[pivotIdx]) {
            rightIdx --;
        }
    }

    swap(rightIdx, pivotIdx, array);

    _quickSourt(array, (rightIdx + 1), endIdx);
    _quickSourt(array, startIdx, (rightIdx - 1));
}

function swap(i, j, array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function quickSort(array) {
    _quickSourt(array, 0, array.length - 1);
    return array;
}



module.exports = {
    quickSort
}