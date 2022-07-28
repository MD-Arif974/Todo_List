const express = require('express');
const router = express.Router();
const deleteCheckedControllers = require('../controllers/deleteTask_controllers');

router.get('/deletechecked-task',deleteCheckedControllers.deletecheckedTask);

module.exports = router;
