const express = require('express');
const router = express.Router();
const checkBal = require("../helpers/checkbalance")
const userTransaction = require("../helpers/transaction")
const userLogout = require("../helpers/logout")
//router for deposite
router.post('/deposite', async (req, res) => {
    try {
        const { userid } = req
        const { particulars, deposite = 0 } = req.body
        //checking balance
        const result = await checkBal.checkBal(userid)
        console.log(result)
        if (result == null) {
            await userTransaction.userDeposite({ particulars: particulars, deposite: deposite, userId: userid, balance: deposite })
            res.json({ message: "amount credited successfully" })
            return
        }
        let newbalance = result.balance + req.body.deposite
        await userTransaction.userDeposite({ particulars: req.body.particulars, deposite: req.body.deposite, userId: req.userid, balance: newbalance })
        res.json({ message: "amount credited successfully" })
    }
    catch (e) {
        res.json({ error: e })
    }
});
//router for withdrawal
router.post('/withdraw', async (req, res) => {
    try {
        console.log("withdrawing")
        const { userid } = req
        const { particulars, withdraw = 0 } = req.body
        const result = await checkBal.checkBal(userid)
        console.log("checking balance")
        if (result == null || result.balance < withdraw) {
            res.json({ message: "there is not enough amount to withdraw" })
            return
        }
        let newbalance = result.balance - withdraw
        await userTransaction.userDeposite({ particulars: particulars, withdrawal: withdraw, userId: userid, balance: newbalance })
        res.json({ message: "amount debited successfully" })
    }
    catch (e) {
        res.json({ error: e })
    }
});
//router for checking balance
router.get('/balance', async (req, res) => {
    try {
        const { userid } = req
        const result = await checkBal.checkBal(userid)
        if (result == null || result.balance == 0) {
            res.json({ message: "your account is empty" })
            return
        }
        res.json({ message: "The balance amount in your account is:" + result.balance })
    }
    catch (e) {
        res.json({ error: e })
    }
});
//router for logging out
router.get('/logout', async (req, res) => {
    try {
        const { sessionid } = req.cookies
        await userLogout.userLogout(sessionid)
        res.clearCookie('sessionid')
        res.json({ message: "loggedout successfully" })
    }
    catch (e) {
        res.send(e)
    }
})

module.exports = router;
