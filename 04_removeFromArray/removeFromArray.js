/*const removeFromArray = function() {
    let output = Array.from(arguments[0])
    for (let i = 1; i < arguments.length; i++) {
        output = output.filter((x) => (x !== arguments[i]))
    }
    return output;
};*/

const removeFromArray = function(array,...args) {
    for (let arg of args) {
        array = array.filter((x) => (x !== arg))
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
