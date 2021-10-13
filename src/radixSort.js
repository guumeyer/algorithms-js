// time: O(nk) , n = number of elements into the array, k = the size of the larggest number from n
// space: O(n+k)
function radixSort(numbers) {
    // get the largest number
    const maxDigitCout = mostDigits(numbers);

    for (let k = 0; k < maxDigitCout; k++) {
        const digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < numbers.length; i++) {
            const digitKey = getDigit(numbers[i], k);
            digitBuckets[digitKey].push(numbers[i]);
        }
        // Flat the diget buckets
        numbers = [].concat(...digitBuckets)
    }

    return numbers;
}

function getDigit(number, position) {
    return Math.floor(Math.abs(number) / Math.pow(10, position)) %10;
}

function digitCouts(number) {
    if (number == 0) return 1;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function mostDigits(numbers) {
    let maxDigits  = 0;
    for (let i = 0; i < numbers.length; i++) {
        maxDigits = Math.max(maxDigits, digitCouts(numbers[i]));
    }
    return maxDigits;
}

module.exports = {
    getDigit,
    digitCouts,
    mostDigits,
    radixSort
}