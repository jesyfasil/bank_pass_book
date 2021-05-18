var express = require('express');
var router = express.Router();
const addPass = require("../helpers/createpassword")
const checkPass = require("../helpers/createpassword")
//router for creating password
router.post('/', async (req, res) => {
  try {
    //checking whether password already exists
    const user = await checkPass.checkPass(req.body)
    if (user.password != null) {
      res.json({ message: "password already set" })
      return
    }
    //password creates
    await addPass.addPass(req.body)
    res.json({ message: "password set successfully" })
  }
  catch (e) {
    console.log(e)
  }
});

module.exports = router;
