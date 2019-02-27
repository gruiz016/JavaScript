let temp = 55

//Logical AND operator - true if both sides are true - false otherwise

/*if (temp >= 60 && temp <= 90) {
  console.log('It is preety nice out')
} 
*/

//Logical OR operator- True if one side is true - false otherwise

if (temp >= 60 && temp <= 90) {
  console.log('It is preety nice out')
} else if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside')
} else {
  console.log('Eh. Do want you want')
}

//CHALLENGE

let isGuestOneVegan = true
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Only offer vegan food!')
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Make sure to offer some vegan food')
} else {
  console.log('Offer anything on the menu')
}