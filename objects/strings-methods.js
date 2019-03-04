let name = '  Giovanni Ruiz  '

//Length Property 
console.log(name.length)

//Convert to upper case
console.log(name.toUpperCase())

//Convert to lowecase
console.log(name.toLowerCase())

//Includes method
let password = 'abc123password098'
console.log(password.includes('password'))

//Trim method
console.log(name.trim())

//Challenge

let isPasswordValid = function(password) {
  return password.length > 8 && !password.includes('password')
}

console.log(isPasswordValid('gio'))
console.log(isPasswordValid('abc1234&^%hy'))
console.log(isPasswordValid('password12345'))