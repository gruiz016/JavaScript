const todo = getSavedTodo()

const searchText = {
  text: '',
  hidecompleted: false
}

renderText(todo, searchText)

document.querySelector('#search-todo').addEventListener('input', function (e) {
  searchText.text = e.target.value
  renderText(todo, searchText)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault()
  todo.push({
      body: e.target.elements.addTodo.value,
      completed: false
    })
  saveTodos(todo)
  renderText(todo, searchText)
  e.target.elements.addTodo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
  searchText.hidecompleted = e.target.checked
  renderText(todo, searchText)
})







