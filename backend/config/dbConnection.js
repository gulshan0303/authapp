const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        mongoose.set('strictQuery', true);
       await  mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
       })
       console.log("database connected!!");
    } catch (error) {
        console.log("something went wrong",error)
    }
}

module.exports = dbConnection;