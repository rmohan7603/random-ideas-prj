const moongose = require('mongoose');

const connectDB = async () => {
    const conn = await moongose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected ${conn.connection.host}`)
}

moongose.set('strictQuery',true);

module.exports = connectDB;