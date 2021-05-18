var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require("uuid")
const userLogin = require("../helpers/login")
const addSession = require("../helpers/addsession")
//router for login
router.post('/', async (req, res) => {
    try {
        //check username and password in table
        const result = await userLogin.userLogin(req.body)
        if (result) {
            let sessionid = uuidv4()
            //adding session for logined user
            await addSession.addSession({ userId: result.id, sessionid: sessionid })
            //asssigning cookie
            res.cookie('sessionid', sessionid, { expire: 30 * 60 })
            res.json({ message: "logined successfully" })
            return
        }

        res.json({ message: "invalid username or password" })

    }
    catch (e) {
        res.json({ error: e })
    }
});

module.exports = router;
