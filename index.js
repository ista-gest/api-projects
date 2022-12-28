const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const routes = require('./routes/routes');

require('dotenv').config();

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(express.json());
app.use('/api', routes);
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}
app.use(cors(corsOptions));
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})