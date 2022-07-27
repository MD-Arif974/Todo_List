const express = require('express');
const router = express.Router();
const taskListControllers = require('../controllers/taskList_controllers');
console.log("Router is loaded 5!");

router.post('/tasks',taskListControllers.taskList);


module.exports = router;