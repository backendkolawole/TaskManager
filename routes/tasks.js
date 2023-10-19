const express = require('express')
const router = express.Router()
const passport = require('passport');

const {createTask, getAllTasks, getTask, updateTask, deleteTask} = require('../controllers/tasks')

router.route('/tasks/').post(passport.authenticate('jwt', { session: false }), createTask).get(passport.authenticate('jwt', { session: false }), getAllTasks)
router.route('/tasks/:id').get(passport.authenticate('jwt', { session: false }), getTask).patch(passport.authenticate('jwt', { session: false }), updateTask).delete(passport.authenticate('jwt', { session: false }), deleteTask)

module.exports = router

