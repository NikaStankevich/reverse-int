module.exports = function reverse (n) {
    let numberToRevers = Math.abs(n);
    
    let stringFromNumber = numberToRevers.toString(10);
    let reversedString = stringFromNumber.split('').reverse().join('');
    let reversedNumber = parseInt(reversedString, 10);

    return reversedNumber;
}
