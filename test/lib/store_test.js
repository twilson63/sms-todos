require('dotenv').config()
const test = require('tape')
const store = require('../../lib/store')
test('add data to store', t => {
  store
    .set({ foo: 'bar', _id: '+18433332222' })
    .then(res => {
      t.ok(res.ok)
      t.end()
    })
    .catch(err => console.log(err))
})
