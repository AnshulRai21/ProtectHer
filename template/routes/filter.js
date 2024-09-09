const express = require('express');
const router = express.Router();
const Alert = require('./models/alert');

router.get('/alerts', (req, res) => {
    const query = {};
    if (req.query.location) {
        query.location = req.query.location;
    }
    if (req.query.message) {
        query.message = req.query.message;
    }
    Alert.find(query, (err, alerts) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(alerts);
        }
    });
});