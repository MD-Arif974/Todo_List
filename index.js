const exp = require('constants');
const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');








// This shoule be on top of home page bcoz we cannot get data if the page has been loaded!

app.use(express.urlencoded());

// set our ejs and views and routes
app.use('/',require('./routes/todo'));

// app.use('/',require('./routes/taskList'));
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./assets'));

// app.use(express.static('./assets'));



// app is listening on this port
app.listen(port,function(err){
    if(err){
        console.log("Error while running server",err);
        return;
    }
   return console.log("Server is running successfully!");
}); 