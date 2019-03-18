const errorMsg = require('../../Helpers/error-msg');
const resHandler = require('../../Helpers/response');

exports.loginValidation = () => {
    return (req, res, next) => {
        const  {
            username,
            password
        } = req.body;
        if(!username){
            return resHandler(res, 400, true, errorMsg.MissingUsername)
        }
        if(!password){
            return resHandler(res, 400, true, errorMsg.MissingPassword)
        }

        next()
    }
};