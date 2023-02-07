const Task = require('../models/Task')
const asyncWrapper = require('../middleware/asyncWrapper')

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({}) // Get all the data
  res.status(200).json({ tasks })
})

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })

  if (!task) {
    const error = new Error('Not found')
    error.status = 404
    return next(error)
    // return res.status(404).json({ msg: error })
  }
  res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!task) {
    return res.status(400).json({ msg: `No task with id ${taskID}` })
  }

  res.status(200).json({ task })

  // res.status(200).json({ _id: taskID, data: req.body });
})

// for put method
const replaceTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
    overwrite: true,
  })

  if (!task) {
    return res.status(400).json({ msg: `No task with id ${taskID}` })
  }

  res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params

  const task = await Task.findOneAndDelete({ _id: taskId })

  if (!task) {
    return res.status(400).json({ msg: `No task with id ${taskId}` })
  }

  res.status(200).json({ task })
})

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  replaceTask,
}
