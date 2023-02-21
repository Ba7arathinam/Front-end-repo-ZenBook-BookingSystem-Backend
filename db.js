const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://Balarathinam:Bala4321@cluster0.31zguzs.mongodb.net/zinroomz'

function connectDB() {

} {
    mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

    var connection = mongoose.connection

    connection.on('error', () => {
        console.log('Mongo DB Connection Failed')
    })

    connection.on('connected', () => {
        console.log('Mongodb succesfully connected')
    })
}
connectDB
module.exports = mongoose