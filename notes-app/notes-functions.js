// Read exsiting notes from local storage

const getSavedNotes = function() {
  const notesJSON = localStorage.getItem('notes')

  if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}

// Save the notes to local storage

const saveNotes = function (notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Generate the DOM structure for a note

const generateNoteDom = function (note) {
  const noteElement = document.createElement('div')
  const textElement = document.createElement('span')
  const button = document.createElement('button')
  
  //Setup remove note button

  button.textContent = 'Remove'
  noteElement.appendChild(button)

  //Setup the note title text
  
  if (note.title.length > 0) {
    textElement.textContent = note.title
  } else {
    textElement.textContent = 'Unnamed note'
  }

  noteElement.appendChild(textElement)
  return noteElement
}

// Render application notes

const renderNotes = function(notes, filters) {
  const filterdNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  document.querySelector('#notes').innerHTML = ''

  filterdNotes.forEach(function(note) {
    const noteElement = generateNoteDom(note)
    document.querySelector('#notes').appendChild(noteElement)
  })
}
