//Multiple arguments

let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5)

console.log(result)

//Default arguments

let getScoreText = function (name = 'Anoymous', score = 0) {
  //return 'Name: ' + name + ' - Score: ' + score
  return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)

console.log(scoreText)

//CHALLENGE AREA

let getTip = function (bill, tip = 0.2) {
  let percent = tip * 100
  let tipPercent = bill * tip
  return `A ${percent}% tip on $${bill} would be $${tipPercent}`
}

let tipAmount = getTip(198)

console.log(tipAmount)
//console.log(tipAmount2)




