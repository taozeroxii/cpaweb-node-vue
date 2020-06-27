const crypto = require('crypto');
var passwordHash = require('password-hash');

const security = {
    password_hash(password) {
        return passwordHash.generate(password);
    },
    password_valify(password, password_hash) {
        return passwordHash.verify(password, password_hash);
    },
    authenticated(req, res, next) {
        req.session.userLogin = {
            "iduser_login": 1,
            "username": "",
            "fname": "",
            "lname": "",
            "status": ""
        }
        try {
            if (req.session.userLogin) { return next(); }
            throw new Error('Unauthorized');
        }
        catch (ex) {
            res.error(ex, 401);
        }
    }
};

module.exports = security;