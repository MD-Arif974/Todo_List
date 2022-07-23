const express = require('express');
const port = 8000;


const app = express();

// set our ejs and views and routes
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');



// app is listening on this port
app.listen(port,function(err){
    if(err){
        console.log("Error while running server",err);
        return;
    }
    console.log("Server is running successfully!");
}); 