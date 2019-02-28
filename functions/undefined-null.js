//Undefined for variable

let name

name = 'Jen'

if (name === undefined) {
  console.log('Please provide a name variable')
} else {
  console.log(name)
}

//Undefined for functions arguments

let square = function(num) {
  console.log(num)
}

let result = square()

//Undefined as function return default vaule

console.log(result)

//Null as assinged value

let age = 29

age = null

console.log(age)

