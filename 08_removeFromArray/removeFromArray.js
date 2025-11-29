const removeFromArray = function(arr, ...args) {
    for(let arg of args) {
        let index = arr.findIndex((item) => item === arg);
        while(index !== -1) {
            arr.splice(index, 1);
            index = arr.findIndex((item) => item === arg);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
