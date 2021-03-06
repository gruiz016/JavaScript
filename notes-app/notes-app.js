const notes = getSavedNotes()

const filters = {
  searchText: ''

}

renderNotes(notes, filters)

document.querySelector('#add-note').addEventListener('click', function(e) {
  notes.push({
    id: uuidv4(),
    title: '',
    body: ''
  })
  saveNotes(notes)
  renderNotes(notes, filters)
})

document.querySelector('#search-notes').addEventListener('input', function(e) {
  filters.searchText =  e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
  console.log(e.target.value)
})