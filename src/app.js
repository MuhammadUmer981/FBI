const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const session = require('express-session');
const cors = require('cors');
const redisClient = require('redis').createClient();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET || 'default_secret',
}));

connectDB();

app.use('/api', userRoutes);

module.exports = app;
