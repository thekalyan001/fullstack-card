const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cardRoutes = require('./routes/cardRoutes');
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/ping', (req, res) => res.send('Server is running'));
app.use('/cards', cardRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
