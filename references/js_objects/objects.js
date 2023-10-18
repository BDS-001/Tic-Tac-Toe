function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

Book.prototype.basic = function() {
    return `${this.title} by ${this.author}`
}

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')
console.log(hobbit.info());
console.log(hobbit.basic())


function Movie(title, author) {
    this.title = title
    this.author = author
}

// Movie.prototype = Book.prototype
Object.setPrototypeOf(Movie.prototype, Book.prototype)

// before making changes the movie prototype inherits the baic function
const lionKing = new Movie('Lion King', 'Disney')
console.log(lionKing.basic())



//using Object.setPrototypeOf allows you to change prototype function individual of each constructor
Movie.prototype.basic = function() {
    return `The Movie ${this.title} is by ${this.author}`
}

Book.prototype.basic = function() {
    return `The Book ${this.title} is by ${this.author}`
}

console.log(lionKing.basic())
console.log(hobbit.basic())



