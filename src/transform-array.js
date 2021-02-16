const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!(arr instanceof Array)) throw Error;
let array = [...arr];
    for (let i = 0; i < array.length; i++) {
        if (i === "--discard-next" ) {
            array.splice(i, 2);
            } else if (i === "--discard-prev") {
                array.splice(i-1, 2);
            } else if (i === "--double-next") {
                let arrEnd =  array.splice(i+2);
                let arrStart =  array.splice(0, i-1);
                arrStart.push(i+1);
                arrStart.push(i+1);
                array = arrStart.concat(arrEnd);
            }
    }
    return array;
};
