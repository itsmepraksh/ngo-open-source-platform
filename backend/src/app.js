const express = require('express');
const app = express();
const contactRoutes = require('./routes/contact.route');
const cors = require('cors');

app.use(cors({
    origin:"https://localhost:5173",
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))
app.use(express.json())
app.use('/contact',contactRoutes)

module.exports = app;