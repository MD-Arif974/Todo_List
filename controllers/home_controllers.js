let Task = require('../models/todo');
let moment = require('moment');
// var taskLists = [
//     {
//         description:"Meeting, At 10 am",
//         categories:"office",
//         date:"24-07-2022",
        
//     },
//     {
//         description:"Meeting, At 10 am",
//         categories:"work",
//         date:"24-07-2022",
       
//     },

// ];

module.exports = {
    home:function(req,res){
     
    //    console.log(req.body);
    Task.find({},function(err,todos){
        if(err) {
            console.log("Error, while fetching data from database!");
            return;
        }
        return res.render('home',{
            todos:todos,
            title:"TODOLIST",
            moment
        });

    })
     
    }
    
};