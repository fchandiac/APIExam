const express = require('express')
const router = express.Router()
const books = require('../database/controllers/books')



router.post('/books', (req, res) => {
    books.create(
        req.body.ISBN,
        req.body.nombreLibro,
        req.body.editorial,
        req.body.portada,
        req.body.paginas
    )
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
    
})

router.get('/books', (req, res) => {
    books.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/books/findOneById', (req, res) => {
    books.findOneById(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/books/update', (req, res) => {
    books.update(
        req.body.id,
        req.body.ISBN,
        req.body.nombreLibro,
        req.body.editorial,
        req.body.portada,
        req.body.paginas
        )
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.delete('/books', (req, res) => {
    books.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router