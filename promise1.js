// 1. create a promise that resolve after 2 sec.

let greet = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Naaz")
    }, 2000)
});

greet.then(msg => console.log(msg));