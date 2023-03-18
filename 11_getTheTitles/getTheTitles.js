const getTheTitles = function(books) {
    let newArr = []
    for (let i = 0; i < books.length; i++) {
        newArr.push(books[i].title)
    }
    return newArr
    // or use .map()
    // I just thought of a for loop first
    // but map already loops through each obj
    // books.map((book) => book.title)
}
getTheTitles(
    [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ]
)
// Do not edit below this line
module.exports = getTheTitles;
