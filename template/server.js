const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/womensafety', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the alert schema
const alertSchema = new mongoose.Schema({
    message: String,
    location: String
});

// Create the Alert model
const Alert = mongoose.model('Alert', alertSchema);

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
});

// Handle new alert
io.on('connection', (socket) => {
    console.log('New client connected');

    // Handle new alert
    socket.on('new-alert', (data) => {
        const alert = new Alert(data);
        alert.save((err) => {
            if (err) {
                console.log(err);
            } else {
                io.emit('alert', data);
            }
        });
    });
});

// Start the server
server.listen(3000, () => {
    console.log('Server started on port 3000');
});