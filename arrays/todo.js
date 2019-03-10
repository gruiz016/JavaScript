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
  completed: true
}, {
  body: 'Take a shower',
  completed: true
}]

const sortTodos = function (todo) {
  todo.sort(function(a, b) {
    if (a.completed < b.completed) {
      return -1
    } else if (b.completed < a.completed) {
      return 1
    } else {
      return 0
    }
  })  
}

const deleteTodo = function (todo, todoBody) {
  const index = todo.findIndex(function (todos, index) {
    return todos.body.toLowerCase() === todoBody.toLowerCase()
  })
  if (index > -1) {
    todo.splice(index, 1)
  }
}

const getThingsToDo = function (todo) {
  return todo.filter(function(todos, index) {
    return todos.completed === false
  })
}

sortTodos(todo)
console.log(todo)
