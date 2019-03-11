const todo = [{
  body: 'Do homework',
  completed: false

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

const incompleteTodo = todo.filter(function(todo) {
  return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodo.length} thing to-do today.`
document.querySelector('body').appendChild(summary)

todo.forEach(function(todo) {
  const newTodo = document.createElement('p')
  newTodo.textContent = todo.body
  document.querySelector('body').appendChild(newTodo)
})





