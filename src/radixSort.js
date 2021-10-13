function getDigit(number, position) {

    return Math.floor(Math.abs(number) / Math.pow(10, position)) %10;
    // return Math.floor(( Math.abs(number) % Math.pow(10, (position + 1))) / Math.pow(10, position));
}


module.exports = {
    getDigit
}