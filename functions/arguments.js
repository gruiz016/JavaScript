//Multiple arguments

let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5)

console.log(result)

//Default arguments

let getScoreText = function (name = 'Anoymous', score = 0) {
  return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)

console.log(scoreText)

//CHALLENGE AREA

let getTip = function (bill, tip = 0.2) {
  return bill * tip
}

let tipAmount1 = getTip(209, 0.30)
let tipAmount2 = getTip(367, 0.15)

console.log(tipAmount1)
console.log(tipAmount2)
