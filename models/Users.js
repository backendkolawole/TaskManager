const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username: String,
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [3, 'password cannot be less than 3 characters']
    }
})


userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


userSchema.methods.comparePasswords = async function (password) {
    return await bcrypt.compare(password, this.password)
};

userSchema.methods.createJWT = async function () {
    const jwt_payload = { userId: this._id, username: this.username }
    return jwt.sign(jwt_payload, process.env.JWT_SECRET)
};


const User = mongoose.model('User', userSchema)
module.exports = User