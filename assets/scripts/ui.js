
const getBooksSuccess = (data) => {
  console.log(data)
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
