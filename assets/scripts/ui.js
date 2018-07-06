const showBooksTemplate = require('./templates/books.handlebars')

const getBooksSuccess = (data) => {
  console.log(data)
  $('.books').html('')
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.books').append(showBooksHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getBooksSuccess,
  failure
}
