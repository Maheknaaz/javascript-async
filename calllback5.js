// 5. Write a function that simulates 3 tasks in sequence using callbacks.
// Here, callback used to run the tasks in order wise like 1-2-3 , not 3 at the same time.
// This above code is callback hell(bcz of nested callbacks)
function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 done");
        callback();
    }, 1000)
}

function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 done");
        callback();
    }, 1000)
}

function task3(callback){
    setTimeout(()=>{
        console.log("Task 3 done");
        callback();
    }, 1000)
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log("All tasks completed");
        });
    });
});