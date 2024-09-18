const router = require('express').Router()
const User_routes = require('../routes/User_routes')
const Todo_routes = require('../routes/Todo_routes')

router.use('/user', User_routes)
router.use('/todo', Todo_routes)

module.exports = router