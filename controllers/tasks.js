const Task = require('../models/Tasks')
const {createCustomError} = require('../errors/custom-error')

const createTask = async (req, res) => {
    const {name} = req.body
    if (!name ) {
        return res.status(400).json({msg: 'Please provide a name for this task'})
    }
    const task = await Task.create(req.body)
    return res.status(201).json({ task })
}

const getAllTasks = async (req, res) => {
        
    const tasks = await Task.find({})
    return res.status(200).json({ tasks })
        
}

const getTask = async (req, res, next) => {
    const { id } = req.params
    const task = await Task.findById(id)
    if (!task) {
        return next(createCustomError(`No task with id: ${id}`, 404))
    }
    return res.status(200).json({ task })
}

const updateTask = async (req, res, next) => {
    const { id } = req.params
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true })
    if (!task) {
        return next(createCustomError(`No task with id: ${id}`, 404))
    }
    return res.status(200).json({ task })
}

const deleteTask = async (req, res, next) => {
    const { id } = req.params
    const task = await Task.findOneAndDelete({ _id: id })
    if (!task) {
        return next(createCustomError(`No task with id: ${id}`, 404))
    }
    return res.status(200).json({  })
}


module.exports = {createTask, getAllTasks, getTask, updateTask, deleteTask}