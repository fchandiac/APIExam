const { Books } = require('../db')

books = {}

async function create(ISBN, nombreLibro, editorial, portada, paginas) {
    const book = await Books.create({
        ISBN: ISBN,
        nombreLibro: nombreLibro,
        editorial: editorial,
        portada: portada,
        paginas: paginas,
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return book
}

async function update(id, ISBN, nombreLibro, editorial, portada, paginas) {
    const book = await Books.updateOne({ _id: id }, {
        ISBN: ISBN,
        nombreLibro: nombreLibro,
        editorial: editorial,
        portada: portada,
        paginas: paginas,
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return book
}

async function findAll(){
    const book = await Books.find().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return book
}

async function destroy(id) {
    const book = await Books.deleteOne({ _id: id }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return book
}

async function findOneById(id) {
    const book = await Books.findOne({ _id: id }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return book
}

books.create = create
books.update = update
books.destroy = destroy
books.findAll = findAll
books.findOneById = findOneById

module.exports = books