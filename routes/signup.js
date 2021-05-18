var express = require('express');
var router = express.Router();
const userSignup = require("../helpers/signup")
//router for registration
router.post('/', async (req, res) => {
  try {
    await userSignup.userSignup(req.body)
    res.json({ message: "registered successfully" })
  }
  catch (e) {
    res.json({ error: e })
  }
});

module.exports = router;
