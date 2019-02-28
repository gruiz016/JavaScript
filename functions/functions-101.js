//Function - input(argument), code, output(return vaule)

let greetUser = function () {
  console.log('Welcome User!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
  let result = num * num
  return result
}

let vaule = square(3)
let otherVaule = square(10)

console.log(vaule)
console.log(otherVaule)

//CHALLENGE AREA

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9
  return celsius
}

let firstTemp = convertFahrenheitToCelsius(32)
let secondTemp = convertFahrenheitToCelsius(68)

console.log(firstTemp)
console.log(secondTemp)