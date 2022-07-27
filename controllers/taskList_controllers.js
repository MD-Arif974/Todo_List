const { render } = require("ejs");
let Task = require('../models/todo');

module.exports = {
     taskList:function(req,res) {
      //   console.log(req.body);
        Task.create(req.body,function(err,newTodoTask){
             if(err) {
               console.log("Error while storing data into database!");
               return;
             }
             console.log("Successfully data has been stored into database!",newTodoTask);
             
             return res.redirect('/');
        })
        
     }
};