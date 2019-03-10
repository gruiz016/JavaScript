const notes = [{
  title: 'my trip',
  body: 'I would like to go to Japan'
}, {
  title: 'learn',
  body: 'Add JavaScrip to my stack'
}, {
  title: 'School work',
  body: 'Finish my homework'
}]

const sortNotes = function (notes) {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
      return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const findNotes = function (notes, query) {
  return notes.filter(function(note, index) {
    const isTitleMacth = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMacth || isBodyMatch
  })
}

// console.log(findNotes(notes, 'MY'))

// const note = findNote(notes, 'note 1')
// console.log(note)

sortNotes(notes)
console.log(notes)