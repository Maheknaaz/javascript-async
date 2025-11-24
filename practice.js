// 1
// function start(callback){
//     console.log("Started....");
//     setTimeout(() => {
//         callback("Task finished after 2 sec.")
//     }, 2000)
// }
// start((task)=>console.log(task));

// 2

// function addnumbers(a,b,callback){
//     setTimeout(() => {
//         callback(a + b);
//     }, 1000)
// }
// addnumbers(10, 5, (result) => console.log("Result:",result) );

//3

// function order(callback){
//     setTimeout(() => {
//         console.log("order recieved..");
//         callback();
//     }, 1000)
// }

// function cooking(callback){
//     setTimeout(() => {
//         console.log("Cooking..");
//         callback();
//     }, 1000)
// }

// function packing(callback){
//     setTimeout(() => {
//         console.log("packing..");
//         callback()
//     }, 1000)
// }
// function deliever(callback){
//     setTimeout(() => {
//         console.log("delivered..");
//         callback()
//     }, 1000)
// }

// order(() => {
//     cooking(() => {
//         packing(() => {
//             deliever(() => {

//             });
//         });
//     });
// });

// 4
function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data recieved")
        }, 2000);
    });
}
getData()
.then(getData => {
    console.log(getData);
})
.catch(err => console.log(err));

