require('dotenv').config()
require('express-async-errors')
require('./config/connect')
require('./models/Users')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const users = require('./routes/users')
const passport = require('passport')
require('./config/passport')(passport)
const { connectDB } = require('./config/connect')
const { notFound } = require('./middleware/not-found')
const { errorHandler } = require('./middleware/error-handler')

app.use(passport.initialize())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', tasks)
app.use('/api/v1/users', users)

app.use(notFound)
app.use(errorHandler)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT, console.log(`server is listening on ${process.env.PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()