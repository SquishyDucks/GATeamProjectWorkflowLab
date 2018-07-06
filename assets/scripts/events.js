const ui = require('./ui.js')
const api = require('./api.js')

const onGetBooks = function (event) {
  event.preventDefault()
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}

module.exports = {
  onGetBooks
}
