//validating input data
module.exports = {
    passValid: (req, res, next) => {
        if (!(req.body.userName && req.body.password)) {
            res.json({ error: "incomplete data" })
            return
        }
        if (req.body.userName.length == 0) {
            res.json({ error: "user name is not provided" })
            return
        }
        if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(req.body.password))) {
            res.json({ error: "password constraints violated" })
            return
        }
        next()
    }
}