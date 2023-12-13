const express = require('express');
const router = express.Router();
const taskControllers = require('../controllers/taskControllers.js');

// routes for handling tasks
router.get('/', taskControllers.getAllTasks);
router.post('/task', taskControllers.createTask);
router.put('/:id', taskControllers.updateTask);
router.delete('/:id', taskControllers.deleteTask);

module.exports = router;
