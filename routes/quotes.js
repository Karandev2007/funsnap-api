const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

// load quotes json
router.get('/quote', (req, res) => {
    const startTime = Date.now()  // get response time
    const quotesPath = path.join(__dirname, '../assets/quotes.json')
    const quotesData = JSON.parse(fs.readFileSync(quotesPath, 'utf-8'))
    const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)]  // pick a random quote

    res.json({
        category: "quote", 
        quote: randomQuote, 
        response_time: `${Date.now() - startTime}ms`
    })
})

module.exports = router
