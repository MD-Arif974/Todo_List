const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo_list_db');

const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error while connecting to database"));
db.once('open',function() {
    console.log("Database has been successfully conncected!");
})