const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/home_controllers');
console.log("Router is loaded!");

router.get('/',homeControllers.home);
router.use('/',require("./tasksList"));
router.use('/',require('./deleteList'));
router.use('/',require('./deleteCheckedTask'));


module.exports = router;