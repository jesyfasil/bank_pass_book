const model = require('../models/session')
module.exports = {
    userLogout: (sessionid) => {
        return new Promise((resolve, reject) => {
            console.log(sessionid)
            console.log("logging out")
            model.Session.destroy({ where: { sessionid: sessionid } }).then(resolve).catch(reject)
        })
    }
}
