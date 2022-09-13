
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3001
app.set('json spaces', 2)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const cors = require('cors')

app.use(cors({ origin: '*' }))
app.use(express.static(__dirname + '/public'))

app.use(require('./routes/books'))
app.use(require('./routes/uploads'))



app.listen(port, () => {
    console.log('server work! at port: ' + port)
})
