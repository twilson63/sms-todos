const PouchDB = require('pouchdb-http')

const db = PouchDB(process.env.DB)

module.exports = {
  get,
  set
}

function get(acct) {
  return db
    .get(acct)
    .then(doc => {
      if (doc && doc.error) {
        return { counter: 0, todos: [] }
      }
      return doc
    })
    .catch(err => {
      return { counter: 0, todos: [] }
    })
}

function set(doc) {
  if (doc._id) {
    return db.put(doc)
  }
  return db.put(doc)
}
