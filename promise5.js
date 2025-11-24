// 5. Write a chain of Promise(Promise chaining).
new Promise(resolve => {
    resolve(10);
})
.then(num => {
    console.log(num);
    return num * 2;
})
.then(num => {
    console.log(num);
    return num * 3;
})
.then(num => console.log(num))