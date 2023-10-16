const passport = require('passport');

const localStorage = require('./strategies/local.strategy');
const jwtStrategy = require('./strategies/jwt.strategy');

passport.use(localStorage);
passport.use(jwtStrategy);
