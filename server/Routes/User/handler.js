const bcrypt = require('bcrypt-nodejs');
const User = require('../../Models/userModel');
const errorMsg = require('../../Helpers/error-msg');
const resHandler = require('../../Helpers/response');

exports.userRegistration = (req, res) => {
    let user = new User;
    user.username = req.body.username;
    let password = req.body.password;

    bcrypt.hash(password, null, null, function(err, hash){
        if (err){
            console.log('err', err);
            return resHandler(res, 500, true, errorMsg. ShortPassword)
        }
        else {
            user.password = hash;
            User.findOne({username: user.username})
            .then((findUser) => {
                if(findUser) {
                    return resHandler(res, 500, true, errorMsg.UserAlreadyExist)
                }else{
                    user.save()
                    .then(() => {
                        res.sendStatus(201)
                    })
                    .catch((err) => {
                        console.log(err);
                        return resHandler(res, 500, true, errorMsg.MissingName)
                    })
                }
            })
            .catch((err) => {
                console.log('err',err);
                res.sendStatus(500)
            })
        }
    })
};