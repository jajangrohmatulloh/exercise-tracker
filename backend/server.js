const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

mongoose.connect(uri, ({useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true}));
const db = mongoose.connection;
db.once('open', () => console.log('Connected to database'))

const userRoute = require('./controllers/user');
app.use('/user', userRoute)


app.listen(8888);
