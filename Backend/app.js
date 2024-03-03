const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const url = process.env.ATLAS_URI;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
});

const cloudComputerRouter = require('./routes/Cloud_computer.js');
app.use('/cloud_computers', cloudComputerRouter);

const databaseCheckRouter = require('./routes/databaseCheck.js'); 
app.use('/database_check', databaseCheckRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
