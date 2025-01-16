const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

// importing routes
const imageRoutes = require('./routes/images')
const jokeRoutes = require('./routes/jokes')
const quoteRoutes = require('./routes/quotes')
const factRoutes = require('./routes/facts')

// all routes together
const routes = [jokeRoutes, quoteRoutes, factRoutes, imageRoutes]
routes.forEach(route => app.use('/', route))

// Serve static images so the URLs work
app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(PORT, () => {
    console.log('server started: https://funsnap-api.onrender.com')
})