const model = require("../models/transactions")
module.exports = {
    checkBal: (id) => {
        console.log("checking balance")
        return new Promise((res, rej) => {
            model.Usertransaction.findOne({ attributes: ['balance'], order: [['createdAt', 'DESC']], where: { userId: id }, raw: true }).then((result) => res(result)).catch(rej)
        })
    }
}