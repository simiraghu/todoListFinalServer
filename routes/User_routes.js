const router = require('express').Router()
const Create_user = require('../controllers/user/Create_user')
const Login_user = require('../controllers/user/Login_user')

router.post('/create_user', Create_user)
router.post('/login_user', Login_user)

module.exports = router