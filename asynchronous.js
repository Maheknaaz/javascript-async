// Asynchronous in JavaScript
// 1. callback
// function getFood(callback){
//     setTimeout(() => {
//         callback("Pizza is ready");
//     }, 2000);
// }

// getFood(function(food){
//     console.log(food);
// });

// 2. Promises

// function getFood(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Burger is ready")
//         }, 2000)
//     })
// }

// getFood()
// .then(food => {
//     console.log(food);
// })
// .catch(err => console.log(err));

//3. Async/await:

function getFood(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fries are ready ")
        }, 2000)
    })
}

async function showFood(){
    const food = await getFood();
    console.log(food);
}

showFood();