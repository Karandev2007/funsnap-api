const express = require('express');
const axios = require('axios');
const router = express.Router();

// github api endpoint
router.get('/v1/github', async (req, res) => {
    const { username } = req.query;

    if (!username) {
        return res.status(400).json({ success: false, error: 'Username is required.', response_time: '0ms' });
    }

    const startTime = Date.now();

    try {
        // fetch user data from github api server
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const data = response.data;

        const responseTime = `${Date.now() - startTime}ms`;

        // provide data in response
        res.json({
            success: true,
            name: data.name || 'Not available',
            bio: data.bio || 'Not available',
            website: data.blog || 'Not available',
            location: data.location || 'Not available',
            followers: data.followers || 0,
            following: data.following || 0,
            avatar: data.avatar_url || 'Not available',
            response_time: responseTime
        });
    } catch (error) {
        console.error('Error fetching GitHub data:', error.message);

        // calculate response time in case of error
        const responseTime = `${Date.now() - startTime}ms`;

        res.status(404).json({
            success: false,
            error: 'User not found.',
            response_time: responseTime
        });
    }
});

module.exports = router;