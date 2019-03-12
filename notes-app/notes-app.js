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

const filters = {
  searchText: ''

}

const renderNotes = function(notes, filters) {
  const filterdNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  document.querySelector('#notes').innerHTML = ''

  filterdNotes.forEach(function(note) {
    const noteElement = document.createElement('p')
    noteElement.textContent = note.title
    document.querySelector('#notes').appendChild(noteElement)
  })
}

renderNotes(notes, filters)

document.querySelector('#add-note').addEventListener('click', function(e) {
  console.log('Note added')
})

document.querySelector('#search-notes').addEventListener('input', function(e) {
  filters.searchText =  e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
  console.log(e.target.value)
})