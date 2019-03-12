const todo = [{
  body: 'Do homework',
  completed: true

}, {
  body: 'Finsihing course',
  completed: true
}, {
  body: 'Cook dinner',
  completed: true
}, {
  body: 'Take a nap',
  completed: false
}, {
  body: 'Take a shower',
  completed: false
}]



const searchText = {
  text: '',
  hidecompleted: false
}

const renderText = function (todo, searchText) {
  let filteredTodo = todo.filter(function (todo) {
    const textMatch = todo.body.toLowerCase().includes(searchText.text.toLowerCase())
    const hideCompletedMatch = !searchText.hidecompleted || !todo.completed

    return textMatch && hideCompletedMatch
  })

  const incompleteTodo = filteredTodo.filter(function(todo) {
    return !todo.completed
  })
  
  document.querySelector('#todos').innerHTML = ''

  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodo.length} thing to-do today.`
  document.querySelector('#todos').appendChild(summary)  

  filteredTodo.forEach(function(todo) {
    const todoEl = document.createElement('p')
    todoEl.textContent = todo.body
    document.querySelector('#todos').appendChild(todoEl)
  })

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
  renderText(todo, searchText)
  e.target.elements.addTodo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
  searchText.hidecompleted = e.target.checked
  renderText(todo, searchText)
})







