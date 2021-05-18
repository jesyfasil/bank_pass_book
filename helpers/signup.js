const model = require("../models/user")
module.exports = {
    userSignup: async (details) => {
        return new Promise((res, rej) => {
            model.User.create(details).then(res).catch(rej)
        })
    }
}