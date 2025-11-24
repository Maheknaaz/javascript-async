// 2. Create a promise that rejects if a number is negative.

function checkNumber(num) {
    return new Promise((resolve, reject) => {
      if (num >= 0) resolve("Positive number");
      else reject("Negative number");
    });
  }
  
  checkNumber(-1)
    .then(result => console.log(result))
    .catch(err => console.log("Error:", err));
  