const express = require('express');
const RedditImageFetcher = require('reddit-image-fetcher');
const router = express.Router();

router.get('/v1/meme', async (req, res) => {
    const startTime = Date.now();

    try {
        // fetch a random meme
        const meme = await RedditImageFetcher.fetch({
            type: 'custom',
            subreddit: ['memes', 'dankmemes', 'wholesomememes'],
            sort: 'hot',
            total: 1,
        });

        if (meme && meme.length > 0) {
            const responseTime = `${Date.now() - startTime}ms`;
            return res.json({
                success: true,
                title: meme[0].title,
                url: meme[0].image,
                subreddit: meme[0].subreddit,
                response_time: responseTime,
            });
        }

        // If no memes found msg
        res.json({
            success: false,
            message: 'No memes available at the moment.',
            response_time: `${Date.now() - startTime}ms`,
        });
    } catch (error) {
        // log and return error
        console.error('Error fetching meme:', error);
        res.json({
            success: false,
            error: 'Failed to fetch meme.',
            response_time: `${Date.now() - startTime}ms`,
        });
    }
});

module.exports = router;