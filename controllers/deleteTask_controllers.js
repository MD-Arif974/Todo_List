let Task = require('../models/todo');

module.exports = {
    deletecheckedTask:function(req,res) {
     
       Task.find({},function(err,docs){
            if(err) {
                console.log("error while fetching data from database!",err);
            }
            else{
                // console.log(docs.length);
                for(let i=0;i<docs.length;i++) {
                    console.log(docs[i]._id.toString());
                    
                    if(docs[i].flag === true) {
                        Task.findByIdAndDelete(docs[i]._id,function(err,newTask){
                            if(err) {
                                console.log("Error while deleting the data!");
                            }
                            else{
                                console.log("Data has been deleted successfully!",newTask);
                            }
                        })
                    }
                    // Task.findByIdAndDelete(docs[i]._id,{flag:true},function(err,newTask){
                    //        if(err) {
                    //         console.log("Error while deleting data from database!");
                    //        }
                    //        else{
                    //          console.log("data delete",newTask);
                    //        }
                    // })

                }
               
            }

       })
      
     
       return res.redirect('back');
    }
}