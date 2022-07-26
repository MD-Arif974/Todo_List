const { render } = require("ejs");

module.exports = {
     taskList:function(req,res) {
        console.log("bhai mai ander aa gya!");
           console.log(req.body);
           return res.render('home');
     }
};