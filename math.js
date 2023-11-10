let sum = (a, b) => a + b;
let mul = (a, b) => a * b;
let g = 9.8;
let pI = 3.14;

let myObj = {
    sum: sum,
    mul: mul,
    g: g,
    pI: pI,
}


// module.exports = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     pI: pI,
// }  // ==> eta short ee


module.exports = myObj;