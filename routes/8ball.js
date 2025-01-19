const express = require('express');
const router = express.Router();

//  8all preloaded responses
const responses = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "No.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// 8Ball api endpoint
router.get('/v1/8ball', (req, res) => {
    const startTime = Date.now();

    // give random response
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    const responseTime = `${Date.now() - startTime}ms`;

    res.json({
        success: true,
        message: randomResponse,
        response_time: responseTime
    });
});

module.exports = router;