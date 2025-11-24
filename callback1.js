// 1. Write a function that takes a callback and prints "Hello Naaz" after 2 sec.

function greet(callback){
    setTimeout(() => {
        callback("Hello Naaz");
    }, 2000);
}

greet((msg) => console.log(msg));
