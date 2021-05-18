const model = require("../models/user")
module.exports = {
    userLogin: (details) => {
        const { userName, password } = details
        return new Promise((resolve, reject) => {
            model.User.findOne({ where: { userName: userName, password: password }, raw: true }).then((result) => { resolve(result) }).catch(reject)
        })
    }
}