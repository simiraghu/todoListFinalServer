const router = require('express').Router()
const Create_todo = require('../controllers/todo/Create_todo')
const Delete_todo = require('../controllers/todo/Delete_todo')
const get_all_todos = require('../controllers/todo/get_all_todos')
const get_todo_by_id = require('../controllers/todo/get_todo_by_id')
const get_todo_by_userid = require('../controllers/todo/get_todo_by_userid')
const Update_todo = require('../controllers/todo/Update_todo')
const auth = require('../middleware/auth')

router.post('/create_todo', Create_todo)
router.get('/get_all_todos', get_all_todos)
router.get('/get_todo_by_userid', auth, get_todo_by_userid)
router.get('/get_todo_by_id/:id', get_todo_by_id)
router.put('/delete_todo/:id', Delete_todo)
router.put('/update_todo/:id', Update_todo)

module.exports = router