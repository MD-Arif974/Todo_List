const exp = require('constants');
const express = require('express');
const port = 8000;


const app = express();


// linking our assets to server
app.use(express.static('./assets'));

// set our ejs and views and routes
app.use('/',require('./routes/todo'));
app.set('view engine','ejs');
app.set('views','./views');



// app is listening on this port
app.listen(port,function(err){
    if(err){
        console.log("Error while running server",err);
        return;
    }
   return console.log("Server is running successfully!");
}); 