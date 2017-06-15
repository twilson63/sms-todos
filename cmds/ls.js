const store = require('../lib/store')
const { join, map, ifElse, always, equals } = require('ramda')

module.exports = todos => {
  return `
Todo List
---------------
${list(todos)}
---------------
  `
}

function list(todos) {
  return join('\n', map(li, todos))
}

const displayCheck = ifElse(equals(true), always('X'), always(' '))

function li(todo) {
  return `[${displayCheck(todo.completed)}] ${todo.id} - ${todo.text}`
}
