const express = require('express');
const router = express.Router();
const translate = require('translate-google-api');

// GET request handler
router.get('/v1/translate', async (req, res) => {
    const startTime = Date.now();

    const { text, language } = req.query;

    // check if text and language query parameters are provided
    if (!text || !language) {
        return res.json({
            success: false,
            error: 'Please provide both "text" and "language" query parameters.',
        });
    }

    try {
        // translate text
        const translatedResult = await translate(text, { to: language });
        const translatedText = Array.isArray(translatedResult)
            ? translatedResult[0]
            : translatedResult;

        const responseTime = `${Date.now() - startTime}ms`;

        // send response
        res.json({
            success: true,
            text: text,
            translation: translatedText,
            language: language,
            response_time: responseTime,
        });
    } catch (err) {
        console.error('Error translating text:', err);
        res.json({
            success: false,
            error: 'Failed to translate text. Please check your input and try again.',
        });
    }
});

// POST request handler
router.post('/v1/translate', async (req, res) => {
    const startTime = Date.now();

    const { text, language } = req.body;

    // check if text and language are provided in the body
    if (!text || !language) {
        return res.json({
            success: false,
            error: 'Please provide both "text" and "language" in the request body.',
        });
    }

    try {
        // translate text
        const translatedResult = await translate(text, { to: language });
        const translatedText = Array.isArray(translatedResult)
            ? translatedResult[0]
            : translatedResult;

        const responseTime = `${Date.now() - startTime}ms`;

        // send response
        res.json({
            success: true,
            text: text,
            translation: translatedText,
            language: language,
            response_time: responseTime,
        });
    } catch (err) {
        console.error('Error translating text:', err);
        res.json({
            success: false,
            error: 'Failed to translate text. Please check your input and try again.',
        });
    }
});

module.exports = router;