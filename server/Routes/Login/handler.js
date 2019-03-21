const resHandler = require('../../helpers/response')
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const User = require('../../Models/userModel');
const config = require('.././../config');
const errorMsg = require('../../Helpers/error-msg');

exports.postLogin = (req, res) => {

    let {
        username,
        password
    } =  req.body;

    User.findOne({username: username})
        .select('password')
        .exec(function (err, user) {
            if (err) {
                console.log(err);
                return resHandler(res,500,true, errorMsg.MissingUsername)
            }
            if (!user) {
                return resHandler(res,401,true, errorMsg.MissingUsername)
                //return res.sendStatus(401)
            }
            bcrypt.compare(password, user.password, function (err, valid) {
                if (err) {
                    console.log(err);
                    return resHandler(res,500,true, errorMsg.PasswordIsNotValid)
                   // return res.sendStatus(500)
                }
                if (!valid) {
                    console.log(err);
                    return resHandler(res,401,true, errorMsg.PasswordIsNotValid)
                    //return res.sendStatus(401)
                }
                const token = jwt.encode({username: username}, config.secretKey);
                res.send(token)
            })
        })
};