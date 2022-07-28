let Task = require('../models/todo');


module.exports = {
    deleteTask:function(req,res) {
        // console.log(req.query.flags);
        let id = req.query.id;
        let currFlag = req.query.flags;
       
        if(currFlag === "false") {
            currFlag = true;
        }
        else{
            currFlag = false;
        }
        Task.findByIdAndUpdate(id,{flag:currFlag},function(err,newTask){
            if(err) {
                console.log("Error while updating data!");
            }
            else{
                console.log("data updated!",newTask);
            }
        });
        return res.redirect('back');
    },
    
}