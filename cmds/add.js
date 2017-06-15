const store = require('../lib/store')
const { append, merge } = require('ramda')
const ls = require('./ls')
module.exports = async (acct, text) => {
  const state = await store.get(acct)
  const newState = merge(state, {
    _id: acct,
    counter: state.counter + 1,
    todos: append(createTodo(text, state.counter + 1), state.todos)
  })
  store.set(newState).catch(err => console.log(err))
  return ls(newState.todos)
}

function createTodo(text, id) {
  return {
    id,
    text,
    completed: false
  }
}
