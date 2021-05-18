const model = require("../models/user")
module.exports = {
    addPass: async (details) => {
        return new Promise((res, rej) => {
            model.User.update({ password: details.password }, { where: { userName: details.userName } }).then(res).catch(rej)
        })
    },
    checkPass: async (details) => {
        return new Promise((res, rej) => {
            model.User.findOne({ attributes: ['password'], where: { userName: details.userName }, raw: true }).then((result) => res(result)).catch(rej)
        })

    }
}