const config = require('./config')

const getBooks = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/books'
  })
}

module.exports = {
  getBooks: getBooks
}
