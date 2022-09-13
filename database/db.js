const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/libreria'
const db = {}



mongoose.connect(url, {})
.then(res => { console.log('connected MongoDb') })
.catch(err => { console.log(err) })

const bookSchema = mongoose.Schema({
    ISBN: String,
    nombreLibro: String,
    editorial: String,
    portada: String,
    paginas: Number,
}, {versionKey: false})




db.Books = mongoose.model('books', bookSchema)



module.exports = db






