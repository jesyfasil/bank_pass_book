const model = require("../models/transactions")
module.exports = {
    userDeposite: (details) => {
        return new Promise((res, rej) => {
            model.Usertransaction.create(details).then(res).catch(rej)
        })
    }
}