const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/Users')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET
// opts.algorithms =  ['RS256']

// console.log(opts)



module.exports = (passport)=> {
    passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
        try {
            const user = await User.findOne({ _id: jwt_payload.userId })
            if (!user) return done(null, false);
            else return done(null, user);
        } catch (err) {
            return done(err, false);
        }
    }));

}