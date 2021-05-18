//validating input data
module.exports = {
    signupvalid: (req, res, next) => {
        if (!(req.body.firstName && req.body.userName && req.body.dob && req.body.phone && req.body.address)) {
            res.json({ error: "incomplete data" })
            return
        }
        if ((req.body.address.length == 0 || req.body.firstName.length == 0 || req.body.userName.length == 0 || req.body.phone.length != 10)) {
            res.json({ error: "incomplete entries" })
            return
        }
        if (isNaN(Date.parse(req.body.dob)) || new Date(req.body.dob).getFullYear() > new Date().getFullYear()) {
            res.json({ error: "invalid dob " })
            return
        }
        next()

    }
}



