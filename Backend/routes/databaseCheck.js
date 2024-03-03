const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    const isConnected = mongoose.connection.readyState === 1;
    const message = isConnected ? "Database connection is established" : "Unable to connect to the database";
    res.json({ isConnected, message });
});

module.exports = router;
