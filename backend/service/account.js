const connection = require('../configs/database');
const { password_hash, password_valify } = require('../configs/security');

module.exports = {
    onRegister(value) {
        //console.log(value)
        return new Promise((resolve, reject) => {
            value.password = password_hash(value.password);
            connection.query('INSERT INTO user_login SET ?', value, (error, result) => {
                if (error) return reject(error);
                resolve(result);
            })
        });
    },
    onLogin(value) {
        return new Promise((resolve, reject) => {
            connection
                .query('select * from user_login where username=?', [value.username], (err, result) => {
                    if (err) return reject(error);
                    if (result.length > 0) {
                        const userLogin = result[0];
                        if (password_valify(value.password, userLogin.password)) {
                            delete userLogin.password;
                            delete userLogin.create_date;
                            delete userLogin.update_date;
                            return resolve(userLogin);
                        }
                    }
                    reject(new Error('Invalid username or password '));
                });
        });
    }
};