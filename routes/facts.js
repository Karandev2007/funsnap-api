const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

// load facts json
router.get('/v1/fact', (req, res) => {
    const startTime = Date.now()  // get response time
    const factsPath = path.join(__dirname, '../data/facts.json')
    const factsData = JSON.parse(fs.readFileSync(factsPath, 'utf-8'))
    
    // pick a random fact
    const randomFact = factsData[Math.floor(Math.random() * factsData.length)]  

    res.json({
        category: "fact", 
        fact: randomFact, 
        response_time: `${Date.now() - startTime}ms`
    })
})

module.exports = router