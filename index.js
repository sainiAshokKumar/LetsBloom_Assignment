const express = require('express');
const connectDB = require('./db');

//get routes 
const books = require('./routes/books');
const app = express();

//connect to database 
connectDB(); 

//initiate middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));