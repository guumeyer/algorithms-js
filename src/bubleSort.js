function bubbleSort(array) {
    let hasSwapped;
    for (let i = array.length; i > 0; i--) {
        hasSwapped = false;
        for (let j = 0;  j < (i - 1); j++) {
            if (array[j] > array[j+1]) {
                swap(j, j+1, array);
                hasSwapped = true;
                
            }
        }

        if (!hasSwapped) break;
    }
    return array;
}

function swap(i, j, array) {
    [array[j], array[i]] = [array[i], array[j]];
}

module.exports = {
    bubbleSort
}