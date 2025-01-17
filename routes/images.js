const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()

// returns a random image url from the folder
router.get('/v1/image/:category', (req, res) => {
    const startTime = Date.now()
    const category = req.params.category
    const folderPath = path.join(__dirname, '../images', category)

    // basic error check
    if (!fs.existsSync(folderPath)) {
        return res.status(404).json({ error: `Category '${category}' not found` })
    }

    fs.readdir(folderPath, (err, files) => {
        if (err || files.length === 0) {
            return res.status(500).json({ error: "No images here or error occurred" })
        }

        // get a random image
        const randomImage = files[Math.floor(Math.random() * files.length)]
        const imageUrl = `https://api.qeintech.in/images/${category}/${randomImage}`
        
        res.json({
            category: category, 
            url: imageUrl, 
            response_time: `${Date.now() - startTime}ms`
        })
    })
})

module.exports = router