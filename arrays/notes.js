const notes = [{
  title: 'Note 1',
  body: 'I would like to go to Japan'
}, {
  title: 'Note 2',
  body: 'Add JavaScrip to my stack'
}, {
  title: 'Note 3',
  body: 'Finish my homework'
}]
const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
      return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }
const note = findNote(notes, 'note 1')
console.log(note)

//console.log(notes.length)
//console.log(notes)
//Counting
// for(let count = 0; count <= 2; count++) {
//   console.log(count)
// }
// for(let count = 0; count < notes.length; count++) {
//   console.log(notes[count]
// }
// const index = notes.findIndex(function (item, index) {
//   return item.title === 'Note 1'
// })

// console.log(index)