let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function(book) {

  return {
    summary: `${book.title} by ${book.author}.`,
    pageCountSummary: `${book.title}, Page count: ${book.pageCount}.`
  }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.pageCountSummary)

/*CHALLENGE AREA

let fahrenheit = 85

let tempCoverter = {
  celsius: (fahrenheit -32) * 5 / 9,
  kelvin: (fahrenheit + 459.67) * 5 / 9
}

let convertion = function(temp) {
  return {
    celsuisSummary: `${fahrenheit} converted to celsius is ${temp.celsius} degrees.`,
    kelvinSummary: `${fahrenheit} converted to kelvin is ${temp.kelvin} degrees.`
  }
}

let tempSummary = convertion(tempCoverter)

console.log(tempSummary.celsuisSummary)
console.log(tempSummary.kelvinSummary)
*/

let tempCoverter = function(fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celsius: (fahrenheit - 32) * (5 / 9),
    kelvin: (fahrenheit + 459.67) * (5 / 9)
  }
}

let convertionOne = tempCoverter(88)

console.log(convertionOne)
