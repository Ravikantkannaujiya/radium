const express = require('express');
const userController=require("../controllers/userController")

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.post('/createUsers', userController.createUsers);
router.post('/login', userController.login)
router.get('/getUserDetails/:userId', userController.getUserDetails)
router.put('/getDetails/:userId', userController.getDetails)

module.exports = router;