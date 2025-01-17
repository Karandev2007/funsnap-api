const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 4363;

// importing routes
const imageRoutes = require('./routes/images')
const jokeRoutes = require('./routes/jokes')
const quoteRoutes = require('./routes/quotes')
const factRoutes = require('./routes/facts')
const text2speechRoutes = require('./routes/text2speech');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// all routes together
const routes = [jokeRoutes, quoteRoutes, factRoutes, imageRoutes];
routes.forEach(route => app.use('/', route));

// text2speech route
app.use('/v1/text2speech', text2speechRoutes);

// serve generated audio file & images
app.use('/audio', express.static(path.join(__dirname, 'audio')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// serve home page from index.html (public folder)
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// start server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
