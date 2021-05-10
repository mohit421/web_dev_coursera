// //***Functions are First-class Data types
// //Funciton are objects
// function multiply(x,y){
//     return x*y;
// }
// console.log(multiply(4,5));

// multiply.version = "v.1.0.0";
// console.log(multiply.toString());
// console.log(multiply.version)


//***Functions are First-class Data types
//Funciton are objects
function multiply(x,y){
    return x*y;
}
multiply.version = "v.1.0.0";
console.version(multiply.version);

//Function Factory

function makeMultiplier(multiplier){
    var myFunc = function(x){
        return multiplier*x;
    }
    return myFunc;
}
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));
