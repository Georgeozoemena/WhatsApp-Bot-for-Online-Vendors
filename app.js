const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db')
const productRoute = require('./routes/productRoutes');

app.use(express.json());
app.use('/api', productRoute)
connectDB()