// time: O(n log n) = (log n) decomposition and (n comparations per decomposition)
// space O(n)
function mergeSort(array) {
    if (array.length <= 1) return array;

    const middleIdx = Math.floor(array.length/2);
    const left = mergeSort(array.slice(0, middleIdx));
    const right = mergeSort(array.slice(middleIdx));

    return merge(left, right);
}

// time: O(m,n) and space: O(n)
function merge(arrayA, arrayB) {
    const arraySize = arrayA.length + arrayB.length;
    const result = Array(arraySize);
    let indexA = 0;
    let indexB = 0;
    for (let i = 0; i < arraySize; i++) {
        if (indexA < arrayA.length && (arrayA[indexA] <= arrayB[indexB] || indexB == arrayB.length)) {
            result[i] = arrayA[indexA];
            indexA ++;
        } else if (indexB < arrayB.length && (arrayB[indexB] <= arrayA[indexA] || indexA == arrayA.length)) {
            result[i] = arrayB[indexB];
            indexB ++;
        }
    }
    return result;
}

module.exports = {
    merge,
    mergeSort
}