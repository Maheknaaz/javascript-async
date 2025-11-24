// 3. Write a function that loads data using a fake API (3 seconds) and then executes a callback.

function getData(callback){
    console.log("Fetching Data...");
    setTimeout(()=>{
        callback("Data recieved");
    }, 3000)
}
getData((data) => console.log(data));