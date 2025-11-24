// 2. Converts normal function into a callback-based function:
function multiply(a,b){
    return a * b;
}
console.log(multiply(10, 2));

// callback-based function
function multiply1(a,b,callback){
    callback(a * b);
}
multiply1(5, 5, (result) => console.log(result));