//checking whether the user is already logined by checking session
var checksession = require('../helpers/checksession');
module.exports = {
    authenticate: async (req, res, next) => {
        try {
            console.log("authenticating")
            if (!(req.cookies.sessionid)) {
                res.send("login first")
                return
            }
            const result = await checksession.checkSession(req.cookies.sessionid)
            if (!result)
                res.send("login first")
            else
                req.userid = result.userId
            next()
        }
        catch (e) {
            res.send(e)
        }
    }
}