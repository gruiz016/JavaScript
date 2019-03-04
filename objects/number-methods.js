let num = 97.801

//Fixed number method
console.log(num.toFixed(2))

//Round Math Method
console.log(Math.round(num))
//Floor Math Method
console.log(Math.floor(num))
//Ceiling Math Method
console.log(Math.ceil(num))

//Random number formual 
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

//Challenge

let guessNumber = function (num) {
  let min = 1
  let max = 5
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  return num === randomNum
}

console.log(guessNumber(2))