require('dotenv').config()
require('express-async-errors')


const taskRouter = require('./routes/tasks')
const userRouter = require('./routes/users')

const { connectDB } = require('./config/connect')

const { notFound } = require('./middleware/not-found')
const { errorHandler } = require('./middleware/error-handler')

const express = require('express')
const app = express()
const passport = require('passport')

require('./config/passport')(passport)

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', taskRouter)
app.use('/api/v1/users', userRouter)

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