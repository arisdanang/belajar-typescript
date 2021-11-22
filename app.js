"use strict";
function combine(input1, input2, resultConverting) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConverting === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConverting === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
const combinedAges = combine(23, 33, 'as-number');
const combineMix = combine("23", "22", 'as-number');
const combinedName = combine('aris', 'danang', 'as-text');
console.log(combinedAges);
console.log(combineMix);
// console.log(combinedName);
