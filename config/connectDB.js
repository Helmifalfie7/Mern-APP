const mongoose = require ('mongoose');
const config = require ('config');

// const connectDB = () => {
//     mongoose.connect(config.get('MONGO_URI'))
//     .then(()=> console.log("mongoose connected"),{ useNewUrlParser: true, useUnifiedTopology: true })
//     .catch(err => console.log(err));

// };


// function with sync and await 
const connectDB = async () => {

    try {
        await  mongoose.connect(config.get('MONGO_URI'),{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log("mongoose connected");

    } catch (err) {
        console.log(err)
    }

};

module.exports= connectDB;