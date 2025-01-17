const express = require('express');
const path = require('path');
const fs = require('fs');
const gTTS = require('gtts');
const crypto = require('crypto');
const router = express.Router();

// text2speech conversion route
router.post('/', (req, res) => {
    const { text } = req.body; 
    if (!text) {
        return res.json({ error: 'No text provided.' });
    }

    // log the received text
    console.log('Received text for conversion: ', text);

    // generate random filename for audio file
    const randomFileName = crypto.randomBytes(16).toString('hex') + '.mp3';
    const filePath = path.join(__dirname, '../audio', randomFileName);

    // use gtts to generate speech
    const speech = new gTTS(text, 'en');

    // save speech file
    speech.save(filePath, (err) => {
        if (err) {
            // log error msg
            console.error('Error saving speech file:', err);
            return res.json({ error: 'Failed to convert text to speech.' });
        }

        // log success msg
        console.log('Speech file saved successfully.');

        // generated speech file url
        const audioUrl = `https://api.qeintech.in/audio/${randomFileName}`;

        // delete file after 24 hours
        setTimeout(() => {
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Error deleting audio file:', err);
                } else {
                    console.log(`Audio file ${randomFileName} deleted after 24 hours.`);
                }
            });
        }, 24 * 60 * 60 * 1000);

        // send back audio url in response
        res.json({
            message: 'Text-to-speech conversion successful',
            audio_url: audioUrl, 
        });
    });
});

module.exports = router;