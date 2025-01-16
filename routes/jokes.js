const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

// load jokes json
router.get('/joke', (req, res) => {
    const startTime = Date.now()  // get response time
    const jokesPath = path.join(__dirname, '../assets/jokes.json')
    const jokesData = JSON.parse(fs.readFileSync(jokesPath, 'utf-8'))
    
    // get random joke
    const randomJoke = jokesData[Math.floor(Math.random() * jokesData.length)] // pick a random joke

    res.json({
        category: "joke", 
        joke: randomJoke, 
        response_time: `${Date.now() - startTime}ms`
    })
})

module.exports = router
