const mongoose = require("mongoose");
const  TaskModel = require("../models/taskModels");


const { Request, Response } = require("express");


exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.json(tasks);
    console.log("Tasks retrieved successfully");
  } catch (error) {
    console.error(`Error while finding tasks: ${error}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createTask = async (req, res) => {
  try {
   
    const newTask =  await TaskModel.create({ ...req.body });
    // const savedTask = await newTask.save();
    return res.status(200).json(newTask);
    console.log("Task created successfully");
  } catch (error) {
    console.error(`Error while creating task: ${error}`);
    res.status(500).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
    const {id} = req.param;
    const {title, completed} = req.body;

    try {
      const updatedTask = await TaskModel.findByIdAndUpdate(
        id, {title, completed}, {new: true}
      );
      if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(updatedTask)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
exports.deleteTask =  async (req, res) => {
  const {id} = req.params;
try {
   const taskToDelete = await TaskModel.findOneAndDelete(id);
   if (!taskToDelete) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json({ message: 'Task deleted successfully'});
} catch (error) {
  res.status(500).json({ error: error.message });
}
}