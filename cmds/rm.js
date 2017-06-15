const store = require('../lib/store')
const { reject, prop, equals, merge, not, compose } = require('ramda')
const ls = require('./ls')
module.exports = async (acct, id) => {
  const state = await store.get(acct)
  const newState = merge(state, {
    todos: reject(compose(equals(id), prop('id')), state.todos)
  })
  const result = await store.set(newState)
  if (not(result.ok)) {
    return console.log('error')
  }
  return ls(newState.todos)
}
