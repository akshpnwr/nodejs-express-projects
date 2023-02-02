const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}); // Get all the data
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }

    res.status(500).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(400).json({ msg: `No task with id ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }

  // res.status(200).json({ _id: taskID, data: req.body });
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;

    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) {
      return res.status(400).json({ msg: `No task with id ${taskId}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
