// 4. Create a promise that fetches from an API using fetch().

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log("Error:", err));