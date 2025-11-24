// 1. converts promise code into async/await.
// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res => res.json())
// .then(data => console.log(data));

async function getData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await res.json();
    console.log(data);
}

getData();