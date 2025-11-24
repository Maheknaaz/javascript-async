// 3. converts a function into a Promise.

// function getData(callback){
//     setTimeout(() => callback("Data loaded"), 2000)
// }

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data loaded"), 2000);
    });
}
getData().then(data => console.log(data));