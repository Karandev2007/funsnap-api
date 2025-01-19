const express = require('express');
const router = express.Router();

// dice roll route
router.get('/v1/dice', (req, res) => {
    const startTime = Date.now();

    // simulate a dice roll from 1-6
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    const responseTime = `${Date.now() - startTime}ms`;

    res.json({
        success: true,
        dice_roll: diceRoll,
        response_time: responseTime
    });
});

module.exports = router;