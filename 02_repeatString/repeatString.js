const repeatString = function(string, times) {
    if (times < 0) {
        return "ERROR"
    }
    output = "";
    for (let i = 0; i < times; i++) {
        output = `${output}${string}`
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
