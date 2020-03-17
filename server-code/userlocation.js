const express = require('express');
const router = express.Router();
const geolocation = require('geolocation')

// Routes
router.get('/greetus', function (req, res) {
    res.send('howdy messy codes!');
});


// Return router
module.exports = router;