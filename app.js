const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Ultimate App API');
});

// Socket.io real-time connections
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
const path = require('path');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Handles any requests that don't match the API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


const PORT = process.env.PORT || 5000;

http.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// MongoDB Connection
mongoose.connect('your-mongodb-url', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));
app.use('/api/auth', require('./routes/auth'));
