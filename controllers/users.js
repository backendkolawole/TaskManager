const User = require('../models/Users')

const login = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(401).json({msg: 'Please provide username and password'})
    }
    const user = await User.findOne({ username })

    if (!user) {
        return res.status(404).json({msg: 'Invalid credentials'})
    }
    const isCorrect = await user.comparePasswords(password)
    if (!isCorrect) {
        return res.status(401).json('Invalid Credentials')
    }
    const token = await user.createJWT()
    res.status(200).json({ user: user.username, token })
}


// Query database with findOne
// If there is an error, call next with the error
// If a user is returned, redirect back to home
// If a user is not found and no errors occur, then insertOne into the database with the username and password. As long as no errors occur there, call next to go to step 2, authenticating the new user, which you already wrote the logic for in your POST / login route.

const register = async (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).json({msg: 'Please provide username and password'})
    }

    try {
        let user = await User.findOne({ username })
        if (user) res.json({msg: 'User already exists. Please try logging in'});
        else {
            user = await User.create(req.body)
            const token = await user.createJWT()
            res.status(201).json({ user: user.username, token })
        }
    } catch (error) {
        console.log(error)
        next(error)
    }

}

module.exports = { login, register }