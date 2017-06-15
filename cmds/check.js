const store = require('../lib/store')
const { map, ifElse, equals, always, merge, not } = require('ramda')
const ls = require('./ls')

module.exports = async (acct, id) => {
  const state = await store.get(acct)
  const newState = merge(state, {
    todos: map(check(id), state.todos)
  })

  await store.set(newState)
  return ls(newState.todos)
}

function check(id) {
  return function(todo) {
    const doCheck = ifElse(
      equals(id),
      always(not(todo.completed)),
      always(todo.completed)
    )
    return merge(todo, {
      completed: doCheck(todo.id)
    })
  }
}
