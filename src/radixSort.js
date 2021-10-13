function getDigit(number, position) {
    return Math.floor(Math.abs(number) / Math.pow(10, position)) %10;
}

function getNumberOfDigets(number) {
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}


module.exports = {
    getDigit,
    getNumberOfDigets
}