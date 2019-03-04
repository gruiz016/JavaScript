const todo = [{
  body: 'Do homework',
  completed: true

}, {
  body: 'Finsihing course',
  completed: false
}, {
  body: 'Cook dinner',
  completed: true
}, {
  body: 'Take a nap',
  completed: false
}, {
  body: 'Take a shower',
  completed: true
}]

const deleteTodo = function (todo, todoBody) {
  const index = todo.findIndex(function (todos, index) {
    return todos.body.toLowerCase() === todoBody.toLowerCase()
  })
  if (index > -1) {
    todo.splice(index, 1)
  }
}

deleteTodo(todo, 'take a nap')
console.log(todo)
