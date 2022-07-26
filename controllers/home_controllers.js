
var taskLists = [
    {
        description:"Meeting, At 10 am",
        category:"office",
        date:"24-07-2022"
    },
    {
        description:"Meeting, At 10 am",
        category:"work",
        date:"24-07-2022"
    },

];

module.exports = {
    home:function(req,res){
       console.log("bhai ander sab thik hai!");
       return res.render('home',{
            taskLists,
            title:"TODOLIST"
        });
    }
};