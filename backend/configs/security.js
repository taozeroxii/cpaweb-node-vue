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
            "u_id": 1,
            "username": "taotest",
            "fname": "รัชวิทย์",
            "lname": "P",
            "status": "admin"
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