const mongoose = require("mongoose")

const connection= mongoose.connect("mongodb+srv://gaurav:gauravraj@cluster0.390kn1i.mongodb.net/fullstackNoteApp?retryWrites=true&w=majority")
// const connection = mongoose.connect("mongodb://127.0.0.1:27017/mongo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6")

module.exports={
    connection
}