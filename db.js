const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://ashok:Ashok001@books.elfyglz.mongodb.net/"; 


const connectDB = async () => {
  try {
    //connect to the mongoDB database 
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongoURI);

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;