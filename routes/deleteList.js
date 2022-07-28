const express = require('express');
const router = express.Router();
const deleteControllers = require('../controllers/delete_controllers');

router.get('/delete-task',deleteControllers.deleteTask);

module.exports = router;
