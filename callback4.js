//4. Write a callback to filter even numbers from an array.

function filterArray(arr, callback){
    return callback(arr);
}
let result = filterArray([1,2,3,4,5,6], function(numbers){
    return numbers.filter(n => n % 2 === 0);
});
console.log(result);