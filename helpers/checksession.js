const model = require('../models/session')
module.exports = {
    checkSession: (sessionid) => {
        return new Promise((resolve, reject) => {
            model.Session.findOne({ where: { sessionid: sessionid }, raw: true }).then((result) => { resolve(result) }).catch(reject)
        })
    }
}