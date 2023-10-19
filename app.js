const express = require('express')
const app = express()
require('express-async-errors');
require('./config/connect')
const tasks = require('./routes/tasks')
const users = require('./routes/users')
const passport = require('passport');
const {connectDB} = require('./config/connect')
const {notFound} = require('./middleware/not-found')
const { errorHandler } = require('./middleware/error-handler')
require('dotenv').config()

require('./models/Users');
require('./config/passport')(passport);

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