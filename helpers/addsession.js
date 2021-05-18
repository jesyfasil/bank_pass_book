const model = require("../models/session")
module.exports = {
    addSession: (details) => {
        console.log(details)
        return new Promise((res, rej) => {
            model.Session.create(details).then(res).catch(rej)
        })
    }
}