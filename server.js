const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

// importing routes
const imageRoutes = require('./routes/images')
const jokeRoutes = require('./routes/jokes')
const quoteRoutes = require('./routes/quotes')

// all routes together
app.use('/v1', imageRoutes, jokeRoutes, quoteRoutes)

// static server for images
app.use('/images', express.static(path.join(__dirname, 'images')))

app.listen(PORT, () => {
    console.log('server started')
})