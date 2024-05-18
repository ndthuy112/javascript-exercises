const reverseString = function(string) {
    output = ""
    for (let letter of string) {
        output = `${letter}${output}`
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
