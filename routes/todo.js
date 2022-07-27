const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/home_controllers');
console.log("Router is loaded!");

router.get('/',homeControllers.home);
router.use('/',require("./tasksList"));


module.exports = router;