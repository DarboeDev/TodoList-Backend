const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    completed: {
      type: Boolean,
      default: false,
      required: false,
      
    },
    importance: {
      type: Boolean,
      default: false,
      required: false,
    },
  }

});

const TaskModel = mongoose.model('Task', taskSchema);
module.exports = TaskModel;


console.log("ok");
