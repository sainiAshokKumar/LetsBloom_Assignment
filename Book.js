const mongoose = require('mongoose');
const connectDB = require('../db');
const books = require('./Data/Books.json'); 
const Books = require('../Model/Book'); 

const db = connectDB(); 
const importData =  async () => {
    try{

        //to clear databse 
        await Books.deleteMany(); 

        //to insert new data 
        await Books.insertMany(books); 
        process.exit(); 
    } catch (err) {
        console.log(`Error is: ${err}`); 
        process.exit(1); 
    }
}

importData(); 