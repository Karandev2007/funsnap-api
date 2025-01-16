const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

// load quotes json
router.get('/fact', (req, res) => {
    const startTime = Date.now()  // get response time
    const quotesPath = path.join(__dirname, '../data/facts.json')
    const quotesData = JSON.parse(fs.readFileSync(quotesPath, 'utf-8'))
    
    // pick a random quote
    const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)]  

    res.json({
        category: "fact", 
        quote: randomQuote, 
        response_time: `${Date.now() - startTime}ms`
    })
})

module.exports = router